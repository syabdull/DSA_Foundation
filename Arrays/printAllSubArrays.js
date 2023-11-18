// js program to print all subArrays
let arr = [12, 23, 45, 67];
function printSubArrays(A) {
  let output = "";
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      output = "[" + " ";
      for (let k = i; k <= j; k++) {
        output = output + A[k] + " ";
      }
      output = output + "]";
      console.log(output);
    }
  }
}
printSubArrays(arr);
