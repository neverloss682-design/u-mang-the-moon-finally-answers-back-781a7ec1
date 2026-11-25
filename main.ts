// The Moon Finally Answers Back — u-mang-the-moon-finally-answers-back-781a7ec1
// Deterministic generator: writes one fixed line to /output/entry.txt.
// Node stdlib only. No network, no randomness, no environment secrets.
//
// Entry (self-judged, iteration 2):
// - Moon's voice, first person, wry and tired of being wished upon.
// - Reversal, not escalation: the Moon answers by wishing for itself.
// - Concrete anchors: "3 a.m.", "the tide goes out at six".
// - Closes on a concrete event, never an abstract word.
// - Iteration 1 used "Four billion years of listening" as its opener;
//   dropped: a live submission already carries that title, so the
//   premise was not fresh. The opener now lists the three prompts
//   (wishes, howls, 3 a.m. promises) without the age claim.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every wish, howl, and 3 a.m. promise you ever made \u2014 I heard it, and nobody wished for me. Tonight I answer myself: I want one night off, and the tide goes out at six.";

function main(): void {
  // Gate: RULES.txt requires 1 to 240 characters, not only whitespace.
  const len = [...ENTRY].length;
  if (len < 1 || len > 240) {
    throw new Error(`entry length ${len} is outside 1..240 characters`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
  console.log(`wrote ${len} chars to ${join(outDir, "entry.txt")}`);
}

main();
