// js  program  to find the given  number is prime or not

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

let ans = isPrime(2);
console.log(ans);
