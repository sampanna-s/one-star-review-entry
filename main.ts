import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Star, Written in Sap — a one-line 1-star review from a houseplant
// about the human who owns it. The line is a single sentence of grievance:
// repotted into a mug with no drainage, then blamed for the smell.
const REVIEW =
  "One star. He repotted me into a coffee mug with no drainage holes, called it 'rustic', and now blames me for the smell every time his friends come over \u2014 as if I picked the mug.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Write to a temp name and rename atomically, so a reader never sees a
// half-written entry and repeated runs produce the exact same bytes.
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, REVIEW, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
