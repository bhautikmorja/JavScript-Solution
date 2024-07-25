function countVowels(str) {
  const matches = str.match(/[aeiouAEIOU]/g);
  return matches ? matches.length : 0;
}

console.log(countVowels("hello")); // Output: 2

// ---------------------------------------------------

function countVowels(str) {
  const vowels = "aeiousAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // Output: 2

// ----------------------------------------------------

function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let count = 0;

  for (let char of str) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello")); // Output: 2
