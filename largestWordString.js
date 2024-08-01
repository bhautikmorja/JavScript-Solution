function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
console.log(findLongestWord("Hello world")); // Output: "Hello"

// function findLongestWord(str) {
//   // Split the string into an array of words
//   let words = str.split(' ');

//   // Initialize a variable to hold the longest word
//   let longestWord = '';

//   // Iterate through the words array
//   for (let word of words) {
//       // If the current word is longer than the longestWord, update longestWord
//       if (word.length > longestWord.length) {
//           longestWord = word;
//       }
//   }

//   // Return the longest word
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
// console.log(findLongestWord("Hello world")); // Output: "Hello"
