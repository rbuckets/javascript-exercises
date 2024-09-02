const sumAll = function(start, end) {
  // checking for input errors
  if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }
  let res = 0;

  // swapping if start > end
  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
  }

  // adding
  for (let i = start; i <= end; i++) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
