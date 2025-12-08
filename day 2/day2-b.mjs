import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8").split(",");

let invalidIds = 0;

for (let i = 0; i < data.length; i++) {
  const [start, end] = data[i].split("-").map(Number);

  for (let j = start; j <= end; j++) {
    const digits = j.toString();

    if (/^(\d+)\1+$/.test(digits)) {
      invalidIds += j;
    }
  }
}

console.log(invalidIds);
