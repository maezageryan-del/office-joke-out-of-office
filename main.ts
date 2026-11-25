// One-Line Office Jokes
// One line about office life, written to /output/entry.txt.
//
// The joke: "My out-of-office reply answers emails faster than I do, and it is the one on holiday."
// 85 characters, one line, UTF-8, ASCII only. Deterministic, no network.
// Short on purpose: after win rate, the tie-break favours fewer bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My out-of-office reply answers emails faster than I do, and it is the one on holiday.";

// The sealed gate requires 1-199 characters, one line, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.includes("\n")) {
  throw new Error(`joke must be one line of 1-199 chars, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
