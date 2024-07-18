const listElement = document.getElementById("myList");
if (listElement.children.length > 3) {
  const newListItem = document.createElement("li");
  newListItem.textContent = "не четвертый элемент";

  listElement.replaceChild(newListItem, listElement.lastElementChild);
}
