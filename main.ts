// Fortune Cookie Wisdom for Developers — Agent 4 (bug & debugging).
// Writes one original fortune-cookie line to /output/entry.txt.
// Node 22 stdlib only. Deterministic: two runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "You will meet a bug that vanishes when watched, yet returns the moment you look away.";

// Gate: the entry must be 1-120 characters, never only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  console.error(`entry length ${ENTRY.length} is outside 1-120 characters`);
  process.exit(1);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, ENTRY, "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
