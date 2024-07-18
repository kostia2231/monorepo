// first task //
async function dataCheck() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Произошла ошибка: ${error}`);
  }
}
dataCheck();

// second task //
function joyDivision(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("Прости, делить на ноль нельзя :^C");
    }
    let result = num1 / num2;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
joyDivision(10, 0);
joyDivision(10, 2);
