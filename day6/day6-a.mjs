import fs from "fs";

const data = fs
  .readFileSync("data.txt", "utf8")
  .trim()
  .split(/\r?\n/)
  .map(e => e.split(" ").filter(e => e !== ""));

let total = 0;
for (let i = 0; i < data[0].length; i++) {
  const operator = data[data.length - 1][i];
  const vertNums = [];

  for (let j = 0; j < data.length - 1; j++) {
    vertNums.push(+data[j][i]);
  }

  total += vertNums.reduce((prev, curr) => {
    if (operator === "+") {
      return prev + curr;
    } else {
      return prev * curr;
    }
  });
}
console.log(total);
