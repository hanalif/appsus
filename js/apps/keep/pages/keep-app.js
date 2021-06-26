import keepList from "../cmps/keep-list.js"
import {keepService} from "../services/keep-service.js"
import noteAdd from '../cmps/note-add.js';
import notesFilter from "../cmps/keep-items-cmps/notes-filter.js";
import note from "../cmps/note.js";

export default {
    template: `
    <section class="keep-app main-layout">
        <notes-filter 
        @setFilterBy="setFilterBy"></notes-filter>
        <div class="note-add-container flex align-center">
            <note-add @createNote="createNote"></note-add>
        </div>
        <div v-if="containsPinned" class="pinned-notes-list-container">
            <h5 class="notes-list-title">PINNED</h5>
            <keep-list 
                @saveNoteChanges="saveNoteChanges" 
                @deleteNote="deleteNote"
                @updateNoteColor="saveNoteChanges" 
                @notePinned="notePinned"
                :notes="notesToShowForPinned">
            </keep-list>
        </div>
       <div v-if="containsNonePinned" class="notes-list-container">
            <h5 v-if="containsPinned" class="notes-list-title">OTHERS</h5>
            <keep-list 
                @saveNoteChanges="saveNoteChanges" 
                @deleteNote="deleteNote"
                @updateNoteColor="saveNoteChanges" 
                @notePinned="notePinned"
                :notes="notesToShowForNonePinned">
        </keep-list>
       </div>
        
    </section>
    `,
    data() {
        return {
            notes: [],
            filterBy: null,
        }
    },
    computed: {
        containsPinned(){
            return this.notes.some(n=> n.isPinned === true);   
        },
        containsNonePinned(){
            return this.notes.some(n=> n.isPinned === false);   
        },
        notesToShow(){
            let notesToShow;
            if (!this.filterBy ||(this.filterBy.type === 'all' && this.filterBy.title === '') ) {
                notesToShow = this.notes;
            }
            else {
                const searchStr = this.filterBy.title.toLowerCase();
                notesToShow = this.notes.filter(note => {
                    return note.info.title.toLowerCase().includes(searchStr) && (this.filterBy.type === 'all' || note.type === this.filterBy.type);
                });
            }

            if (notesToShow) {
                notesToShow = notesToShow.sort((a,b)=>{
                    return   new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });
            }

            return notesToShow;
        },
        notesToShowForPinned() {
            let notes = this.notesToShow;
            if (notes) {
                notes = notes.filter(n => n.isPinned);
            }
            return notes;
        },
        notesToShowForNonePinned() {
            let notes = this.notesToShow;
            if (notes) {
                notes = notes.filter(n => !n.isPinned);
            }
            return notes;
        }
    },
    methods: {
        saveNoteChanges(note){
            keepService.save(note)
                .then(()=>{
                    keepService.query()
                        .then(notes => { 
                            this.notes = notes;
                        })
                })
        },
        deleteNote(noteId){
            keepService.remove(noteId)
            .then(()=>{
                keepService.query()
                    .then(notes => { 
                        this.notes = notes;
                    })
            });
        },
        createNote(newNoteData) {
            let note = keepService.createNote(newNoteData);
            keepService.save(note)
                .then(()=>{
                    keepService.query()
                        .then(notes => { 
                            this.notes = notes;
                        })
                })
        },
        setFilterBy(filterResults){
            this.filterBy = filterResults;
        },
        notePinned(note) {
            note.isPinned = !note.isPinned;
            keepService.save(note)
                .then(()=>{
                    keepService.query()
                        .then(notes => { 
                            this.notes = notes;
                        })
                })
        }
    },
    created(){
        keepService.query()
            .then(notes => this.notes = notes)
    },
    components: {
        keepList,
        noteAdd,
        notesFilter
    }
}