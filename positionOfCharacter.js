function countCharacterOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countCharacterOccurrences("hello world", "l")); // Output: 3
console.log(countCharacterOccurrences("javascript", "a")); // Output: 2
