import { displayNotes, addNote, clearForm, searchNotes } from './notes.js';

document.addEventListener('DOMContentLoaded', function () {
    displayNotes();
    document.getElementById('addNoteBtn').addEventListener('click', addNote);
    document.getElementById('search').addEventListener('input', searchNotes);
});
