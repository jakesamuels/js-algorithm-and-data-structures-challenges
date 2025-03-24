function countOccurrences(str, char) {
  let count = 0;

  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === char) {
  //       count++;
  //     }
  //   }

  // ===== CASE INSENSITIVE =====
  let lowerStr = str.toLowerCase();
  let lowerChar = char.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerChar) {
      count++;
    }
  }

  return count;
}

module.exports = countOccurrences;
