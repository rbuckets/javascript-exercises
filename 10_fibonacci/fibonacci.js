const fibonacci = function(num) {
  num = parseInt(num);

  if (num < 0) {
    return "OOPS";
  }
  if (num == 0) {
    return 0;
  }
  if (num <= 2) {
    return 1;
  }

  let first = 1;
  let second = 1;
  for (let i = 3; i <= num; i++) {
    let temp = second;
    second = first + second;
    first = temp;
  }

  return second;
};

// Do not edit below this line
module.exports = fibonacci;
