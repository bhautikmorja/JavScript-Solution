function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
