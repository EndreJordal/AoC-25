import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8").split(/\r?\n/);

const testData = fs.readFileSync("testData.txt", "utf8").split(/\r?\n/);

function rotator(instructions, init = 50) {
  let zeroCount = 0;
  let currVal = init;

  for (let instruction of instructions) {
    const dir = instruction[0];
    const amount = Number(instruction.slice(1));

    const delta = dir === "L" ? -amount : amount;

    currVal = (((currVal + delta) % 100) + 100) % 100;

    if (currVal === 0) zeroCount++;
  }

  return zeroCount;
}
console.log(rotator(data));
