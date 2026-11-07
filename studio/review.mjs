#!/usr/bin/env node
// Sends project changes or screenshots to OpenAI, then posts the review to the pull request and Slack.
// Usage: node studio/review.mjs --mode code|creative [--base origin/main] [--tests file] [--dry-run]
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url)), root = resolve(here, '..');
const arg = (name, fallback) => { const i = process.argv.indexOf(`--${name}`); return i < 0 ? fallback : process.argv[i + 1]; };
const has = name => process.argv.includes(`--${name}`);
const read = file => { const path = join(root, file); return existsSync(path) ? readFileSync(path, 'utf8') : ''; };
const clip = (text, limit) => text.length > limit ? `${text.slice(0, limit)}\n[truncated]` : text;

const config = JSON.parse(readFileSync(join(here, 'studio.json'), 'utf8'));
const mode = arg('mode', 'code');
if (!['code', 'creative'].includes(mode)) throw new Error(`Unknown mode: ${mode}`);

const context = (config.context || []).map(file => `# ${file}\n${read(file)}`).join('\n\n');
const parts = [{ type: 'input_text', text: `Product: ${config.game}\n\nProject context:\n${clip(context, 20000)}` }];

if (mode === 'code') {
  const base = arg('base', 'origin/main');
  const diff = execFileSync('git', ['diff', `${base}...HEAD`], { cwd: root, encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
  if (!diff.trim()) { console.log('No code changes to review.'); process.exit(0); }
  parts.push({ type: 'input_text', text: `Code changes:\n${clip(diff, config.maxDiffChars)}` });
  const tests = arg('tests');
  if (tests) parts.push({ type: 'input_text', text: `Automated test output:\n${clip(read(tests), 8000)}` });
} else {
  const dir = join(root, config.imagesDir || 'studio-out/images');
  const images = existsSync(dir) ? readdirSync(dir).filter(file => /\.(png|jpe?g)$/i.test(file)).sort().slice(0, config.maxImages) : [];
  if (!images.length) { console.log('No screenshots found, so the creative review was skipped.'); process.exit(0); }
  for (const file of images) {
    const type = extname(file).toLowerCase() === '.png' ? 'image/png' : 'image/jpeg';
    parts.push({ type: 'input_image', image_url: `data:${type};base64,${readFileSync(join(dir, file)).toString('base64')}` });
  }
}

const body = { model: config.model, instructions: readFileSync(join(here, 'prompts', `${mode}.md`), 'utf8'), input: [{ role: 'user', content: parts }], max_output_tokens: config.maxOutputTokens };
const outDir = join(root, 'studio-out');
mkdirSync(outDir, { recursive: true });

if (has('dry-run')) {
  const chars = parts.reduce((sum, part) => sum + (part.text || part.image_url || '').length, 0);
  console.log(`Dry run: ${mode} review, model ${config.model}, ${parts.length} parts, ${chars} characters. Nothing was sent.`);
  process.exit(0);
}

const key = process.env.OPENAI_API_KEY;
if (!key) { console.log('OPENAI_API_KEY is not set, so the review was skipped and nothing was charged.'); process.exit(0); }

const api = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
const response = await fetch(`${api}/responses`, { method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
const result = await response.json();
if (!response.ok) throw new Error(`OpenAI request failed (${response.status}): ${result.error?.message || 'unknown error'}`);

const text = result.output?.flatMap(item => item.content || []).filter(item => item.type === 'output_text').map(item => item.text).join('\n').trim();
if (!text) throw new Error(`OpenAI returned no review text (status: ${result.status}, reason: ${result.incomplete_details?.reason || 'none'}).`);
const title = mode === 'code' ? 'GPT code review' : 'GPT creative notes';
const message = `**${title}: ${config.game}**\n\n${text}\n\n_AI-generated. Recommendations need owner approval._`;
writeFileSync(join(outDir, `${mode}-review.md`), `${message}\n`);
console.log(message);

const { GITHUB_TOKEN: token, GITHUB_REPOSITORY: repo, PR_NUMBER: pr, SLACK_WEBHOOK_URL: slack } = process.env;
if (token && repo && pr) {
  const posted = await fetch(`${process.env.GITHUB_API_URL || 'https://api.github.com'}/repos/${repo}/issues/${pr}/comments`, { method: 'POST', headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' }, body: JSON.stringify({ body: message }) });
  if (!posted.ok) console.warn(`Could not comment on the pull request: ${posted.status}`);
}
if (slack) {
  const posted = await fetch(slack, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: message.replace(/\*\*/g, '*') }) });
  if (!posted.ok) console.warn(`Could not post to Slack: ${posted.status}`);
}
