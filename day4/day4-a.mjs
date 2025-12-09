import fs from "fs";

const data = fs
  .readFileSync("data.txt", "utf8")
  .trim()
  .split(/\r?\n/)
  .map(e => e.split(""));

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
];

let accessible = 0;

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (data[i][j] === ".") continue;

    let counter = 0;
    for (const [di, dj] of dirs) {
      if (data[i + di]?.[j + dj] === "@") counter++;
    }

    if (counter < 4) accessible++;
  }
}

console.log(accessible);
