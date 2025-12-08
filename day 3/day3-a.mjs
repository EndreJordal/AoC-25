import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8").split(/\r?\n/);

const testData = fs.readFileSync("testData.txt", "utf8").split(/\r?\n/);

let totalJoltage = 0;
for (let i = 0; i < data.length; i++) {
  const digits = data[i].split("");

  const bankJoltage = [];
  let currPos = 0;

  while (bankJoltage.length !== 12) {
    for (let j = 0; j < digits.length - 1; j++) {
      if (digits.slice(0, -1).map(Number)[j] > lead) {
        lead = digits.slice(0, -1).map(Number)[j];
        leadPos = j;
      }
    }
  }

  //const trailing = Math.max(...digits.slice(leadPos + 1).map(Number));
  //totalJoltage += Number(`${lead}${trailing}`);
}
console.log(totalJoltage);
