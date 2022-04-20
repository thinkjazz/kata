// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2, s = Math.sqrt(num); i<=s; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

