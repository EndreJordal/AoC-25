import fs from "fs";

const data = fs
  .readFileSync("data.txt", "utf8")
  .split(/\r?\n/)
  .map(e => e.split(""));

let total = 0;
let nums = [];
for (let i = data[0].length - 1; i >= 0; i--) {
  if (
    data[0][i] === " " &&
    data[1][i] === " " &&
    data[2][i] === " " &&
    data[3][i] === " " &&
    data[4][i] === " "
  )
    continue;
  nums.push(Number(`${data[0][i]}${data[1][i]}${data[2][i]}${data[3][i]}`));

  if (data[4][i] !== " ") {
    total += nums.reduce((prev, curr) => {
      if (data[4][i] === "+") {
        return prev + curr;
      } else {
        return prev * curr;
      }
    });
    nums = [];
  }
}
console.log(total);
