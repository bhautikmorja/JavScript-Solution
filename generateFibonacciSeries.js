function generateFibonacci(n) {
  let fibonacciSequence = [];
  let n1 = 0;
  let n2 = 1;

  for (let i = 0; i < n; i++) {
    fibonacciSequence.push(n1);
    let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  return fibonacciSequence;
}

console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
