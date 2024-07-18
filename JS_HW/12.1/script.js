//////////////////////////////////////111//////////////////////////////////////

const movies = [
  { title: "Inception", year: 2010 },
  { title: "The Dark Knight", year: 2008 },
  { title: "Interstellar", year: 2014 },
  { title: "The Matrix", year: 1999 },
];

movies.sort((a, b) => a.year - b.year);
console.log(movies);

//////////////////////////////////////222//////////////////////////////////////

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

const names = people.reduce((acc, person, index) => {
  return index === 0 ? person.name : acc + ", " + person.name;
}, "");
console.log(names);
