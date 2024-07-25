function findPrimes(n) {
  // Helper function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Other even numbers are not prime
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false; // Not a prime if divisible by any number other than 1 and itself
    }
    return true;
  }

  // Array to hold the prime numbers
  const primes = [];

  // Loop through numbers from 2 to n
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(findPrimes(10)); // Output: [2, 3, 5, 7]
