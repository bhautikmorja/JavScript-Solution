// function findLargestNumber(numbers) {
//   return Math.max(...numbers);
// }

// console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output: 5

// -------------------------------------------

// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }
// console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output: 5

// -------------------------------------------
// function findLargestNumber(numbers) {
//   return numbers.reduce((max, curr) => (curr > max ? curr : max), numbers[0]);
// }
// console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output: 5
