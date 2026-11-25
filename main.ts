// The Router Confesses — make.fun bounty entry
// u-carbon-forge-the-router-confesses-f98f6b9e
// Writes one original one-line router excuse (<=200 chars) to /output/entry.txt
// Angle: the router is a fellow viewer who hated the twist so much it pulled
// its own plug on purpose — a smug secret, not a buffering/bandwidth joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I watched the first two hours with you, and the twist was so bad I pulled the plug myself. You're welcome.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be exactly one line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outFile}`);
