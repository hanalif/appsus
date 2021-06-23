import { storageService } from '../../../services/async-storage-service.js'
import {notesList} from './notes-basic-list.js'
import { utilService } from '../../../services/utills-service.js';

const KEEPS_KEY = 'notes';
const gNotes = _createNotes();

export const keepService = {
    query,
    remove,
    save,
    getById,
};


function query() {
    return storageService.query(KEEPS_KEY)
        .then(notes => {
            if (!notes.length || !notes) {
                notes = gNotes
                utilService.saveToStorage(KEEPS_KEY, notes)
            }
            return notes
        });

}


function remove(noteId) {
    return storageService.remove(KEEPS_KEY, noteId);
}

function save(note) {
    if (note.id) {
        return storageService.put(KEEPS_KEY, note);
    } else {
        return storageService.post(KEEPS_KEY, note);
    }
}

function getById(noteId) {
    return storageService.get(KEEPS_KEY, noteId);
}


function _createNotes() {
    let notes = utilService.loadFromStorage(KEEPS_KEY);
    if (!notes || !notes.length) {
        notes = notesList.getInitialNotes();
        // notes.push(_createNote());
        utilService.saveToStorage(KEEPS_KEY, notes);
    }
    return notes;
}

function _createNote() {
    const note = {
        id: utilService.makeId(),
    };
    return note;
}