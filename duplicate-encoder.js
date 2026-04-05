function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (word.indexOf(char) === word.lastIndexOf(char)) {
      result += "(";
    } else {
      result += ")";
    }
  }

  return result;
}