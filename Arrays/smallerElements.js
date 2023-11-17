//count the no of elements which is having atleast one greater element

let arr = [3, 4, 5, 2, 9, 7];

//psudoCode
//BruteForce Approach
//set the maximum to min infinity
// Loop trough an array
//check with every element of an arry if it is greater than the max ,make max equal to that element
// take one variable and set it to 0
// loop tough an array if it is not equal to max increase the count
//print the count after iterating trough whole array

function findSmallerElements(A) {
  let count = 0;
  let max = Number.MIN_VALUE; //  setting  the value to  minimum infinity
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] != max) {
      count++;
    }
  }
  console.log(count);
}
findSmallerElements(arr);

//implementing the whole  thing in a  single loop

function singleLoop(A) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
      count = 0;
    }
    if (A[i] == max) {
      count++;
    }
  }
}
singleLoop(arr);
