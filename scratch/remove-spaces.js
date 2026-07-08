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

  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  // Regex to find className="..." or className='...'
  const regex = /className="([^"]+)"/g;
  content = content.replace(regex, (match, classStr) => {
    const cleaned = classStr.trim().replace(/\s+/g, " ");
    if (cleaned !== classStr) {
      modified = true;
      return `className="${cleaned}"`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Cleaned class names in ${path.relative(appDir, filePath)}`);
  }
});

console.log("Class names cleaned!");
