// Sends a design question to GPT and saves the answer next to it, so the two can go back and forth.
// Answers every studio/questions/*.md that has no .answer.md yet.
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';

const config = JSON.parse(readFileSync('studio/studio.json', 'utf8'));
const context = (config.context || []).map(f => { try { return `# ${f}\n${readFileSync(f, "utf8")}`; } catch { return ""; } }).join("\n\n");
const api = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1', key = process.env.OPENAI_API_KEY;
const instructions = 'You are a senior consumer-app product designer and an honest collaborator on a mobile app with a solo owner. Respect decisions the project context marks as deliberate; raise risks about them without proposing to remove them. Challenge weak ideas, say what you would change and why, and separate evidence from opinion. No flattery. Be specific and concrete. Under 900 words.';
for (const f of readdirSync('studio/questions').filter(n => n.endsWith('.md') && !n.endsWith('.answer.md'))) {
  const out = `studio/questions/${f.replace('.md', '.answer.md')}`;
  if (existsSync(out)) continue;
  const res = await fetch(`${api}/responses`, {
    method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: config.model, instructions, input: `Project context:\n${context.slice(0, 20000)}\n\nQuestion:\n${readFileSync(`studio/questions/${f}`, "utf8")}`, max_output_tokens: 8000 }),
  });
  const data = await res.json();
  const text = res.ok ? data.output?.flatMap(i => i.content || []).filter(i => i.type === 'output_text').map(i => i.text).join('\n') : `Request failed (${res.status}): ${data.error?.message}`;
  writeFileSync(out, `${text}\n`);
}
