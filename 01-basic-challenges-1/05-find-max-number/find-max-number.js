function findMaxNumber(arr) {
  // ===== USING METHODS (max) =====
  //   return Math.max(...arr);

  let maxNumber = arr[0];

  // ===== USING FOR LOOP =====
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

module.exports = findMaxNumber;
