
import { displayNotes, addNote, clearForm, searchNotes, pinNote } from './notes.js';

document.addEventListener('DOMContentLoaded', function () {
    displayNotes();
    document.getElementById('addNoteBtn').addEventListener('click', addNote);
    document.getElementById('search').addEventListener('input', searchNotes);

    
    const notesContainer = document.getElementById('notes-container');
    notesContainer.addEventListener('click', function (event) {
        const target = event.target;

        
        if (target.classList.contains('pin-button')) {
            const index = target.dataset.index;
            pinNote(index);
        }
    });
});
