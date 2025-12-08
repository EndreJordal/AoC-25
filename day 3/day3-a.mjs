import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8").split(/\r?\n/);

//const testData = fs.readFileSync("testData.txt", "utf8").split(/\r?\n/);

for (let i = 0; i < data.length; i++) {
  const digits = data[i].split("");

  const bankJoltage = [];
  let currRegion = [...digits.slice(0, bankJoltage.length - 11).map(Number)];

  while (bankJoltage.length !== 12) {
    for (let j = 0; j < currRegion.length; j++) {
      if (currRegion[j] === Math.max(...currRegion)) {
        bankJoltage.push(currRegion[j]);
        currRegion = [...currRegion.slice(j, bankJoltage.length - 11)];
      }
    }
  }
}
const totalJoltage = bankJoltage.reduce((prev, curr) => prev + curr, 0);
console.log(totalJoltage);
