//function to count  digits

let num = 1234;
function countDigits() {
  let count = 0;
  while (num != 0) {
    num = Math.floor(num / 10);
    count++;
  }
  console.log(count);
}

countDigits(num);
