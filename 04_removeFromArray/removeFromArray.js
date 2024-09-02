const removeFromArray = function(arr, ...removedElements) {
  let res = []
  let removedElementsArray = Array.from(removedElements)

  for (let i = 0; i < arr.length; i++) {
    if (!removedElementsArray.includes(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
};

// Do not edit below this line
module.exports = removeFromArray;
