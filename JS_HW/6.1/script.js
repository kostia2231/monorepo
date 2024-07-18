// // //1 TASK

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// // 2 TASK

const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 8 && arr[i] < 20) {
    console.log(arr[i]);
  }
}

// 3 TASK

const arr2 = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
let min = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < min) {
    min = arr2[i];
  }
}
console.log(min);

// 4 tASK

const arr3 = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
const index = 0;
const newValue = 99;

if (index >= 0 && index < arr3.length) {
  arr3[index] = newValue;
}
console.log(arr3);

// 5 TASK

const words = ["слово", "второеСлово", "самоеДлинноеСлово", "последнееСлово"];

let longestW = "";
let maxLength = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].length > maxLength) {
    longestW = words[i];
    maxLength = words[i].length;
  }
}

console.log(longestW);
