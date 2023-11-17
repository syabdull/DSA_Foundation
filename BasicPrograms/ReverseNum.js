//js program to reverse a numer

//psudoCode
//get the remainder of number by division of number with 10
//take one variable as name it as reverse number
// add remainder to the varaible , before adding increase place value by 10
// make quotient  as the number and repeat process(reducing the number by one number)

let num = 1234;
function revNumber(num) {
  let rev = 0;
  while (num != 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  console.log(rev);
}
revNumber(num);
