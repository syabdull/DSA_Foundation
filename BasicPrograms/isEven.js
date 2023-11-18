//function to check the given number  is Even or odd
function isEven(n) {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
let num = 20;
let ans = isEven(num);
console.log(ans);
