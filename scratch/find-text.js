const fs = require("fs");
const path = require("path");

const appDir = "C:\\Lawyers\\app";

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

walkDir(appDir, (filePath) => {
  if (!filePath.endsWith(".tsx")) return;
  const content = fs.readFileSync(filePath, "utf-8");
  if (content.toLowerCase().includes("experience, strategy, and compassion")) {
    console.log(`Found in: ${path.relative(appDir, filePath)}`);
  }
});
