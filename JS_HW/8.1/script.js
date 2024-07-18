///1111///

function multiplyArrEl(arr) {
  let multiply = 1;
  for (let i = 0; i < arr.length; i++) {
    multiply = multiply * arr[i];
  }
  return multiply;
}

const numbers = [1, 2, 3, 4, 5, 6];

const result = multiplyArrEl(numbers);
console.log(result);

///2222///

const numbers1 = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;
let i = 0;

while (i < numbers1.length) {
  sum = sum + numbers1[i];
  i++;
}

console.log(sum);
