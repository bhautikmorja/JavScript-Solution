// function mergeAndSortArrays(arr1, arr2) {
//   let mergedArray = arr1.concat(arr2);
//   return mergedArray.sort((a, b) => a - b);
// }

// console.log(mergeAndSortArrays([3, 1, 4], [2, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]

function mergeAndSortArrays(arr1, arr2) {
  const mergedArray = [];

  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    mergedArray.push(arr2[i]);
  }

  // Implement Bubble Sort to sort the merged array
  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = 0; j < mergedArray.length; j++) {
      if (mergedArray[i] < mergedArray[j]) {
        let temp = mergedArray[i];
        mergedArray[i] = mergedArray[j];
        mergedArray[j] = temp;
      }
    }
  }

  return mergedArray;
}

console.log(mergeAndSortArrays([3, 1, 4], [2, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
