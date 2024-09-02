const convertToCelsius = function(temperature) {
  let resUnrounded = (temperature - 32) / (9 / 5);
  return Math.round(resUnrounded * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let resUnrounded = temperature * (9 / 5) + 32;
  return Math.round(resUnrounded * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
