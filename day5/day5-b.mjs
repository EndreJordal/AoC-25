import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8");
const [rangesBlock] = text.trim().split(/\r?\n\s*\r?\n/);

const ranges = rangesBlock
  .split(/\r?\n/)
  .map(line => line.split("-").map(Number))
  .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

const state = ranges.reduce(
  (st, [start, end]) => {
    // first range initializes the "current merged interval"
    if (st.currStart === null) {
      st.currStart = start;
      st.currEnd = end;
      return st;
    }

    // if this range overlaps or touches current interval, merge it
    if (start <= st.currEnd + 1) {
      if (end > st.currEnd) st.currEnd = end;
      return st;
    }

    // otherwise, current interval is finished:
    // add its inclusive length to total, then start a new interval
    st.total += st.currEnd - st.currStart + 1;
    st.currStart = start;
    st.currEnd = end;
    return st;
  },
  { currStart: null, currEnd: null, total: 0 }
);

// add the last interval (reduce can't "close" it automatically)
const totalFresh = state.total + (state.currEnd - state.currStart + 1);

console.log(totalFresh);
