import fs from "fs";

const data = fs.readFileSync("testData.txt", "utf8").split(/\r?\n/);

let total = 0;

console.log(data);
