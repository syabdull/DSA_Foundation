//All no repeaing  twice except one
//psudo  code
//Traverse trough an array and store the result in a varibale after doing xor
//print the result

let arr = [12, 13, 12, 13, 4, 4, 5, 6, 5];

function findSingleNo(A) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ A[i];
  }
  console.log(ans);
}
findSingleNo(arr);
