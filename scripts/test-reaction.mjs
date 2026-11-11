import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

// Compile only this isolated game and its tests; no new test dependency needed.
const output = mkdtempSync(join(tmpdir(), "memeguessr-reaction-"));
try {
  const compile = spawnSync(process.execPath, [
    resolve("node_modules/typescript/bin/tsc"), "tests/guess-the-reaction.test.ts",
    "--outDir", output, "--target", "ES2020", "--module", "CommonJS",
    "--moduleResolution", "node", "--strict", "--esModuleInterop", "--skipLibCheck",
  ], { stdio: "inherit" });
  if (compile.status !== 0) process.exitCode = compile.status ?? 1;
  else {
    const tests = spawnSync(process.execPath, ["--test", join(output, "tests/guess-the-reaction.test.js")], { stdio: "inherit" });
    process.exitCode = tests.status ?? 1;
  }
} finally {
  rmSync(output, { recursive: true, force: true });
}
