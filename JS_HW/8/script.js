// 11111111111111111111111111

function sumNumbers(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  console.log(result);
}
sumNumbers(2, 2);

// 22222222222222222222222222

const numbers = [1, 2, 3, 4, 5];
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}

calculateSum(numbers);

// 33333333333333333333333333

const students = [
  { name: "Alice", age: 21, course: "1" },
  { name: "Max", age: 22, course: "2" },
  { name: "Sam", age: 23, course: "3" },
];

function displayStudentInfo({ name, age, course }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Course: ${course}`);
}

students.forEach(displayStudentInfo);
