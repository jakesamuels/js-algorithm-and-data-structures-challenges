function titleCase(str) {
  // ===== FOR LOOP (Initial attempt) =====
  const wordsArr = str.toLowerCase().split(" ");
  const formattedWords = [];
  for (let i = 0; i < wordsArr.length; i++) {
    const formattedWord = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
    formattedWords.push(formattedWord);
  }
  return formattedWords.join(" ");

  // ===== FOR LOOP (More concise) =====
  //   const wordsArr = str.toLowerCase().split(" ");
  //   for (let i = 0; i < wordsArr.length; i++) {
  //     wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
  //   }
  //   return wordsArr.join(" ");

  // ===== REGEX =====
  //   return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

module.exports = titleCase;
