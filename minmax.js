const arr = [2, 5, -2, 3, 6];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);

const array = [2, 5, -2, 3, 6];
let max = arr[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log(max);
