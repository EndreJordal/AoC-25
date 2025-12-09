import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8").split(/\r?\n/).filter(Boolean);

function hitsDuringRotation(currVal, dir, amount) {
  const k = amount;
  if (k <= 0) return 0;
  if (dir === "R") {
    let t0 = (100 - currVal) % 100;
    if (t0 === 0) t0 = 100;
    return k >= t0 ? Math.floor((k - t0) / 100) + 1 : 0;
  } else {
    // "L"
    let t0 = currVal % 100;
    if (t0 === 0) t0 = 100;
    return k >= t0 ? Math.floor((k - t0) / 100) + 1 : 0;
  }
}

function rotator(instructions, init = 50) {
  let zeroCount = 0;
  let currVal = init;

  for (let instruction of instructions) {
    if (!instruction) continue;
    const dir = instruction[0];
    const amount = Number(instruction.slice(1));

    // count clicks that land on 0 during this rotation
    zeroCount += hitsDuringRotation(currVal, dir, amount);

    // update final position
    const delta = dir === "L" ? -amount : amount;
    currVal = (((currVal + delta) % 100) + 100) % 100;
  }

  return zeroCount;
}

// Example test (should be 6 for example input)
// const testData = fs.readFileSync("testData.txt", "utf8").split(/\r?\n/).filter(Boolean);
// console.log(rotator(testData));

console.log(rotator(data));
