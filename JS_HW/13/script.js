const items = [
  { name: "item1", price: 30 },
  { name: "item2", price: 70 },
  { name: "item3", price: 20 },
  { name: "item4", price: 60 },
];

function hasExpensiveItem(arr) {
  return arr.some((item) => item.price > 50);
}
console.log(hasExpensiveItem(items));
