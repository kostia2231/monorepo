//11111111////////////////////////////
const url = "https://jsonplaceholder.typicode.com/todos/1";
async function fetchTodo() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
fetchTodo();

//22222222////////////////////////////
const url2 = "https://jsonplaceholder.typicode.com/posts?_limit=10";
async function fetchPosts() {
  const response = await fetch(url2);
  const data = await response.json();
  console.log(data);
}

fetchPosts();
