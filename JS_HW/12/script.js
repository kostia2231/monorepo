/////111///////////////////////////////////////////////////////////////////////

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 15 },
];

const updatedPeople = people.map((person) => {
  return {
    name: person.name,
    age: person.age,
    status: person.age > 18 ? "взрослый" : "ребенок",
  };
});

console.log(updatedPeople);

/////222///////////////////////////////////////////////////////////////////////

const movies = [
  { title: "Inception", rating: 4.9 },
  { title: "The Dark Knight", rating: 5.0 },
  { title: "Interstellar", rating: 3.8 },
  { title: "The Matrix", rating: 4.5 },
];

movies.forEach((movie) => {
  if (movie.rating > 4) {
    console.log(movie.title);
  }
});
