for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let l = 5; l >= i; l--) {
    line += " ";
  }
  let k = 1;
  for (let j = 1; j <= i; j++) {
    line += " " + k;
    k = (k * (i - j)) / j;
  }
  console.log(line);
}

// Output:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1
