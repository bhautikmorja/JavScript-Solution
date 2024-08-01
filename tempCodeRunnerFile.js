function flattenArray(arr) {
  return arr.join();
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // Output: [1, 2, 3, 4, 5, 6]
