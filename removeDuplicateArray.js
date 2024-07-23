let arr = [1, 1, 2, 2, 3, 3];

let result = arr.filter((value, index) => {
  return arr.indexOf(value) == index;
});
console.log(result);

// indexOf(value) - Position Ape J Value Hoy ani

// let arr = [1, 2, 3, 1, 2, 4, 5]; // Example array with duplicates
// let uniqueArr = [];

// arr.forEach((element, index) => {
//     // Check if the element is already in the uniqueArr
//     if (!uniqueArr.includes(element)) {
//         uniqueArr.push(element); // Add it if it's not a duplicate
//     }
// });

// console.log(uniqueArr); // Output the array without duplicates
