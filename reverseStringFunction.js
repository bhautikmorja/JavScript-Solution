// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("hello")); // Output: "olleh"

// -----------------------------------------------------

// function reverseString(str) {
//   let revString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revString += str[i];
//   }
//   return revString;
// }

// console.log(reverseString("hello")); // Output: "olleh"

// -----------------------------------------------------

// function reverseString(str) {
//   if (str == "") return "";
//   else return reverseString(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseString("hello")); // Output: "olleh"
