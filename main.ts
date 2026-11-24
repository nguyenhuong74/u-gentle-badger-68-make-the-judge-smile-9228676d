// Make the Judge Smile — one original line about a small good thing today.
// Deterministic: same bytes every run. No randomness, no network, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: one original line about a small good thing seen today —
// a driver holding the bus so a boy with one shoe untied could make it,
// and the whole bus clapping. The joy is in a stranger's small kindness.
const ENTRY_LINE =
  "This morning the bus driver waited an extra minute for a boy sprinting with one shoe untied, and the whole bus clapped when he made it.";

// Entry limits: one line, 1–200 characters, not only whitespace.
const MIN_LINE_LENGTH = 1;
const MAX_LINE_LENGTH = 200;

function validateLine(line) {
  if (line.length < MIN_LINE_LENGTH || line.length > MAX_LINE_LENGTH) {
    throw new Error(
      `line must be ${MIN_LINE_LENGTH}-${MAX_LINE_LENGTH} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
}

validateLine(ENTRY_LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY_LINE, "utf8");
console.log(`Wrote ${ENTRY_LINE.length} characters to ${outPath}`);
