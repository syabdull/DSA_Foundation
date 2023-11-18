let arr = [12, 12, 45, 67, 87, 90];

// js program to reverse an array

function reverseAnArray(A) {
  let s = 0;
  let e = A.length - 1;
  while (s < e) {
    let temp = A[s];
    A[s] = A[e];
    A[e] = temp;
    s++;
    e--;
  }
  console.log(A);
}
reverseAnArray(arr);
