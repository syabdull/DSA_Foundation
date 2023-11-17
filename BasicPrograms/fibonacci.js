// js program to print the fibonacci  numbers

function printFibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 1; i <= 10; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
  }
}

printFibonacci(10);
