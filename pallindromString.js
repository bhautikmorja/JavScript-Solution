function isPalindrome(str) {
  const cleandString = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedString = cleandString.split("").reverse().join("");
  return cleandString === reversedString;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
