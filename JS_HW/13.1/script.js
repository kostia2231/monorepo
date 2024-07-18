document.addEventListener("DOMContentLoaded", function () {
  const noteInput = document.getElementById("note-input");
  const saveBtn = document.getElementById("save-btn");
  const savedNote = document.getElementById("saved-note");

  const savedNoteText = localStorage.getItem("note");
  if (savedNoteText) {
    savedNote.innerText = savedNoteText;
  }

  saveBtn.addEventListener("click", function () {
    const note = noteInput.value;
    localStorage.setItem("note", note);
    savedNote.innerText = note;
  });

  console.log(JSON.stringify(localStorage));
});
