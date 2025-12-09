import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8").trim().split(/\r?\n/);

let totalJoltage = 0;

for (let i = 0; i < data.length; i++) {
  const digits = data[i].split("");
  const n = digits.length;

  const bankJoltage = [];
  let currPos = 0;

  while (bankJoltage.length !== 12) {
    const remain = 12 - bankJoltage.length;
    const lastAllowedIndex = n - remain;

    const region = digits.slice(currPos, lastAllowedIndex + 1);

    const max = Math.max(...region); // number
    bankJoltage.push(String(max)); // store as string to match digits

    currPos += region.indexOf(String(max)) + 1; // move past chosen digit
  }

  totalJoltage += Number(bankJoltage.join(""));
}

console.log(totalJoltage);
