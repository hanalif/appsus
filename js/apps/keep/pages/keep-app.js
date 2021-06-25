import keepList from "../cmps/keep-list.js"
import {keepService} from "../services/keep-service.js"
import noteAdd from '../cmps/note-add.js';
import notesFilter from "../cmps/keep-items-cmps/notes-filter.js";

export default {
    template: `
    <section class="keep-app main-layout">
        <notes-filter 
        @setFilterBy="setFilterBy"></notes-filter>
        <div class="note-add-container flex align-center">
            <note-add @createNote="createNote"></note-add>
        </div>
        <keep-list 
            @saveNoteChanges="saveNoteChanges" 
            @deleteNote="deleteNote"
            @updateNoteColor="saveNoteChanges" 
            :notes="notesToShow">
        </keep-list>
    </section>
    `,
    data() {
        return {
            notes: null,
            filterBy: null
        }
    },
    computed: {
        notesToShow(){
            if (!this.filterBy ||(this.filterBy.type === 'all' && this.filterBy.title === '') ) return this.notes;
            const searchStr = this.filterBy.title.toLowerCase();
            let notesToShow = this.notes.filter(note => {
                return note.info.title.toLowerCase().includes(searchStr) && (this.filterBy.type === 'all' || note.type === this.filterBy.type);
            });
            return notesToShow;
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