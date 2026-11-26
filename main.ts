import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Exceeds expectations in generating tasks, " +
  "then delegates them back to me. " +
  "Promotion to middle management denied.";

mkdirSync("/output", { recursive: true });
if (line.length < 1 || line.length > 140 || line.includes("\n")) {
  throw new Error(`entry must be one line of 1-140 chars, got ${line.length}`);
}
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote /output/entry.txt (${line.length} chars)`);
