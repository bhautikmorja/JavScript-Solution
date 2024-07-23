for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + j + " ";
  }
  console.log(str);
}

// 2nd pattern

const n = 5;
for (let i = 1; i <= n; i++) {
  let arr = [];
  let count = 1;
  for (let j = 1; j <= 2 * n; ++j) {
    if (i + j >= n + 1 && i >= j - n + 1) {
      arr.push(count);
      count++;
    } else {
      arr.push(" ");
    }
  }
  console.log(arr.join(" "));
}
