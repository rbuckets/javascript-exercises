const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
  return first - second;
};

const sum = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  return res;
};

const multiply = function(nums) {
  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    res *= nums[i];
  }
  return res;
};

const power = function(num, power) {
  return num ** power;
};

const factorial = function(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
