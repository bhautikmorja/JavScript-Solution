function findSecondLargest(arr) {
  arr.sort((a, b) => b - a);
  return arr[1];
}

console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(findSecondLargest([10, 5, 4, 8, 9])); // Output: 9
