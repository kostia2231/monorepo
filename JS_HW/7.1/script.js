//Task 1

const person = {
  name: "Ivan",
  age: 71,
};

console.log("Name is: " + person.name + ".");
console.log("Age is: " + person.age + ".");

//Task 2

const bookOne = {
  title: "bookTitleOne",
  author: "bookAuthorOne",
};

const bookTwo = {
  title: "bookTitleTwo",
  author: "bookAuthorTwo",
};

const bookThree = {
  title: "bookTitleThree",
  author: "bookAuthorThree",
};

console.log("Название: " + bookOne.title);
console.log("Автор: " + bookOne.author);

console.log("-----------------------------------------");

console.log("Название: " + bookTwo.title);
console.log("Автор: " + bookTwo.author);

console.log("-----------------------------------------");

console.log("Название: " + bookThree.title);
console.log("Автор: " + bookThree.author);

//Task 3

const rectangle = {
  a: 10,
  b: 35,
};

rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b);

console.log(rectangle);

//Task 4

const fruits = [
  { name: "Яблоко", color: "зеленый" },
  { name: "Банан", color: "желтый" },
  { name: "Вишня", color: "красный" },
];

const redFruits = [];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].color === "красный") {
    redFruits.push(fruits[i]);
  }
}
console.log(redFruits);

//Task 5

const playlist = {
  songs: [
    {
      title: "titleOne",
      artist: "artistOne",
    },
    {
      title: "titleTwo",
      artist: "artistTwo",
    },
    {
      title: "titleThree",
      artist: "artistThree",
    },
  ],
};

for (let i = 0; i < playlist.songs.length; i++) {
  const song = playlist.songs[i];
  console.log(`Название: ${song.title}`);
  console.log(`Исполнитель: ${song.artist}`);
}
