import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8");
const [rangesBlock, idsBlock] = text.trim().split(/\r?\n\s*\r?\n/);

const ranges = rangesBlock.split(/\r?\n/);
const ids = idsBlock.split(/\r?\n/).map(Number);

let freshConfirmed = 0;
idloop: for (let id of ids) {
  for (let i = 0; i < ranges.length; i++) {
    const nums = ranges[i].split("-").map(Number);
    if (nums[0] < id && id < nums[1]) {
      freshConfirmed++;
      continue idloop;
    }
  }
}

console.log(freshConfirmed);
