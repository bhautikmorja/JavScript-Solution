// function countWords(str) {
//   let count = 0;
//   str.split(" ").forEach((word) => {
//     if (word) count++;
//   });
// }

// console.log(countWords("hello world")); // Output: 2
// console.log(countWords("JavaScript is a fun language")); // Output: 5

function countWords(str) {
  let count = 0;
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i]) count++;
  }
  return count;
}

console.log(countWords("hello world")); // Output: 2
console.log(countWords("JavaScript is a fun language")); // Output: 5
