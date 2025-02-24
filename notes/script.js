document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    let title = document.getElementById("title").value.trim();
    let description = document.getElementById("description").value.trim();
    
    if (!title || !description) {
        alert("Please fill in both fields!");
        return;
    }
    
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({ title, description });
    localStorage.setItem("notes", JSON.stringify(notes));
    
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    loadNotes();
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let notesContainer = document.getElementById("notes");
    notesContainer.innerHTML = "";
    
    notes.forEach((note, index) => {
        let noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.innerHTML = `
            <div class="note-content">
                <h3>${note.title}</h3>
                <p>${note.description}</p>
            </div>
            <div class="note-actions">
                <button onclick="editNote(${index})">Edit</button>
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
        `;
        notesContainer.appendChild(noteElement);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}

function editNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let newTitle = prompt("Edit title:", notes[index].title);
    let newDescription = prompt("Edit description:", notes[index].description);
    
    if (newTitle && newDescription) {
        notes[index] = { title: newTitle.trim(), description: newDescription.trim() };
        localStorage.setItem("notes", JSON.stringify(notes));
        loadNotes();
    }
}
