var maxSequence = function (arr) {
  let maxSum = 0;
  let currentSum = 0;

  if (Array.isArray(arr) === false) {
    return 0;
  }
  if (arr.some((item) => typeof item !== "number")) {
    return 0;
  }
  for (const num of arr) {
    currentSum += num;
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

module.exports = maxSequence;
