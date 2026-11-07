// Guards the owner's fixed decisions so later changes can't quietly drop them.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const context = readFileSync('docs/PROJECT-CONTEXT.md', 'utf8');

test('project context keeps the deliberate Go Back design', () => {
  assert.match(context, /ex-held password/i);
  assert.match(context, /\$100/);
});
