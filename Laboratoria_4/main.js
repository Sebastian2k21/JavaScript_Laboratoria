const localStorageKey = 'savedNotes'
const defaultNoteColor = '#f0e34d'

var notes;

function loadNotes() {
    let localData = localStorage.getItem(localStorageKey);
    let notes = JSON.parse(localData);
    return notes == null ? [] : notes
}

function saveNotes() {
    let jsonString = JSON.stringify(notes);
    localStorage.setItem(localStorageKey, jsonString);
}

function displayNotes() {
    let noteContainer = document.getElementById('note_container');
    let templateElement = document.getElementById('note_template');

    noteContainer.innerHTML = null
}

function createNote() {
    let creator = document.getElementById('note_creator');

    let note = {
        'title': creator.querySelector('input[name=note_title]').value,
        'content': creator.querySelector('textarea[name=note_content]').value,
        'color': creator.querySelector('input[name=note_color]').value,
        'timestamp': Date.now(),
    }

    notes.push(note)

    saveNotes()
    displayNotes()
}

function deleteNote(id) {
    console.log(id)
    notes.splice(id, 1);
    saveNotes();
    displayNotes();
}