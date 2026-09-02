const { formatGreeting, calculateSum } = require("./script.js");

console.log("🔍 Running Automated Unit Tests...\n");

let failures = 0;

function assertEqual(testName, actual, expected) {
  if (actual === expected) {
    console.log(`  ✅ PASS: ${testName}`);
  } else {
    console.error(`  ❌ FAIL: ${testName} (Expected "${expected}", but got "${actual}")`);
    failures++;
  }
}

// Tests
assertEqual("Formats greeting with a name", formatGreeting("Alice"), "Hello, Alice! Welcome to GitHub Actions.");
assertEqual("Formats fallback greeting when empty", formatGreeting(""), "Hello, Developer!");
assertEqual("Adds positive numbers correctly", calculateSum(10, 5), 15);
assertEqual("Adds negative numbers correctly", calculateSum(-2, 8), 6);

console.log("\n==================================");
if (failures > 0) {
  console.error(`❌ ${failures} test(s) failed!`);
  process.exit(1); // Non-zero exit code signals failure to GitHub Actions
} else {
  console.log("🎉 All unit tests passed successfully!");
  process.exit(0); // Exit code 0 signals success
}