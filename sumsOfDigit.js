function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    temp = num % 10;
    sum += temp;
    num = math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(567)); // Output: 18

// function sumOfDigits(num) {
//     let numStr = num.toString();

//     let sum = 0;

//     for (let i = 0; i < numStr.length; i++) {
//         // Convert the character to a number and add it to the sum
//         sum += parseInt(numStr[i]);
//     }

//     return sum;
// }

// console.log(sumOfDigits(1234)); // Output: 10
// console.log(sumOfDigits(567)); // Output: 18
