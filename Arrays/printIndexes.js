// program to print the  starting and ending indexes of subArray of given index

function printStartEndIndex(A, k) {
  for (let i = 0; i <= A.length - k; i++) {
    let start = i;
    let end = i + (k - 1);
    console.log(start, end);
  }
}
let arr = [12, 33, 45, 56, 64];
printStartEndIndex(arr, 3);
