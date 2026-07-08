const fs = require("fs");
const lines = fs.readFileSync("C:\\Lawyers\\app\\page.tsx", "utf-8").split("\n");

lines.forEach((line, idx) => {
  if (line.toLowerCase().includes("experience, strategy, and compassion")) {
    console.log(`Line ${idx + 1}: ${line}`);
    // Print 30 lines before and 30 lines after
    const start = Math.max(0, idx - 30);
    const end = Math.min(lines.length, idx + 40);
    console.log("\n--- CONTEXT ---");
    for (let i = start; i < end; i++) {
      console.log(`${i + 1}: ${lines[i]}`);
    }
    console.log("---------------\n");
  }
});
