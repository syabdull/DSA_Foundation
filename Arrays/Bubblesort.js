// js program to sort an array using bubble sort  Algo

let arr = [36, 19, 29, 12, 5];
let temp = 0;
for (let i = 0; i < arr.length; i++) {
  let flag = 0;
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      falg = 1;
    }
  }
  if (flag == 1) {
    break;
  }
}
console.log(arr);
