// js program to print prime from 1 to 100
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
function printPrimes(n) {
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
printPrimes(100);
