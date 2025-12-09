import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8").split(",");

let invalidIds = 0;
for (let i = 0; i < data.length; i++) {
  const range = data[i].split("-").map(Number);
  for (let j = range[0]; j <= range[1]; j++) {
    const digits = j.toString();
    if (digits.length % 2 === 1) continue;
    const left = digits.slice(0, digits.length / 2);
    const right = digits.slice(digits.length / 2);
    if (left === right) {
      invalidIds += Number(digits);
    }
  }
}

console.log(invalidIds);
