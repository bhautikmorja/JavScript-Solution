function flattenArray(arr) {
  let result = [];

  function flatten(item) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flatten(item[i]);
      }
    } else {
      result.push(item);
    }
  }

  flatten(arr);
  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // Output: [1, 2, 3, 4, 5, 6]
