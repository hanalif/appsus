import keepList from "../cmps/keep-list.js"
import {keepService} from "../services/keep-service.js"
import noteAdd from '../cmps/note-add.js';

export default {
    template: `
    <section class="keep-app main-layout main-screen">
        <notes-filter></notes-filter>
        <div class="note-add-container">
            <note-add @createNote="createNote"></note-add>
        </div>
        <keep-list 
            @saveNoteChanges="saveNoteChanges" 
            @deleteNote="deleteNote"
            @updateNoteColor="updateNoteColor" 
            :notes="notesToShow">
        </keep-list>
    </section>
    `,
    data() {
        return {
            notes: [],
            filterBy: null
            
        }
    },
    computed: {
        notesToShow(){
            return this.notes
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
        updateNoteColor(styleData){
            let note = styleData.note;
            if(!note.style){
                note.style = '';
             }
             note.style = styleData.style;
             keepService.save(note)
             .then(()=>{
                 keepService.query()
                     .then(notes => { 
                         this.notes = notes;
                     })
             })
        },
        createNote(newNoteData) {
            console.log('new note data', newNoteData)
            let note = keepService.createNote(newNoteData);
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
        noteAdd
    }
}