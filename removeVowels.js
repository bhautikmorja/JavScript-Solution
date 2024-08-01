function removeVowels(str) {
  let vowels = "aeiouAEIOU";
  result = "";

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

console.log(removeVowels("hello world")); // Output: "hll wrld"
console.log(removeVowels("javascript")); // Output: "jvscrpt"
