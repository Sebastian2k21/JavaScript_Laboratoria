export function addNote() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const color = document.getElementById('color').value;
    const pin = document.getElementById('pin').checked;
    const date = new Date().toLocaleString();

    const note = {
        title,
        content,
        color,
        pin,
        date
    };

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);

    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();
    clearForm();
}

export function displayNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';

    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach((note, index) => {
        const noteElement = createNoteElement(note);
        notesContainer.appendChild(noteElement);
    });
}

export function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('color').value = '#ffffff';
    document.getElementById('pin').checked = false;
}

export function searchNotes() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const notesContainer = document.getElementById('notes-container');
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notesContainer.innerHTML = '';

    notes.forEach((note, index) => {
        if (
            note.title.toLowerCase().includes(searchInput) ||
            note.content.toLowerCase().includes(searchInput)
        ) {
            const noteElement = createNoteElement(note);
            notesContainer.appendChild(noteElement);
        }
    });
}

export function createNoteElement(note) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.style.backgroundColor = note.color;

    const titleElement = document.createElement('h2');
    titleElement.textContent = note.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = note.content;

    const dateElement = document.createElement('p');
    dateElement.classList.add('date');
    dateElement.textContent = note.date;

    noteElement.appendChild(titleElement);
    noteElement.appendChild(contentElement);
    noteElement.appendChild(dateElement);

    return noteElement;
}
