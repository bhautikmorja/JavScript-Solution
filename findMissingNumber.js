function findMissingNumber(arr, n) {
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
console.log(findMissingNumber([1, 2, 3, 5], 5)); // Output: 4
console.log(findMissingNumber([1, 3, 4, 5, 6], 6)); // Output: 2
