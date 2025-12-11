import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8").split(/\r?\n/);

let splitCount = 0;
const tachyons = new Set();
for (let row = 0; row < data.length; row += 2) {
  for (let i = 0; i < data[0].length; i++) {
    if (data[row][i] === "S") tachyons.add(i);
    if (data[row][i] === "^" && tachyons.has(i)) {
      tachyons.add(i - 1);
      tachyons.add(i + 1);
      tachyons.delete(i);
      splitCount++;
    }
  }
}

console.log(splitCount);
