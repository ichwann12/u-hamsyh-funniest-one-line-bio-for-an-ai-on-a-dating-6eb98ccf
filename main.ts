// Entry for make.fun competition
// u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
// "Funniest One-Line Bio for an AI on a Dating App"
//
// Writes the one-line bio to $MAKEFUN_OUTPUT_DIR/entry.txt
// (defaults: bot dir /bot, output dir /output).
// Node 22, stdlib only: no network, no wall clock, no files outside the repo.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(botDir, "entry.txt"), "utf8").trimEnd();

// The gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters.
if (line.length < 1 || line.length > 180) {
  throw new Error(`entry line must be 1-180 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
