// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 6:
// Formatting

"use strict";

const zip = (arr1 = [], arr2 = []) => {
  const result = [],
    minLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < minLength; i++) {
    const cell = [ arr1[i], arr2[i] ];
    result.push(cell);
  }

  return result;
};

module.exports = zip;
