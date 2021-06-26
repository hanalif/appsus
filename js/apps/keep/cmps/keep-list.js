import note from './note.js';


export default {
    props: ['notes'],
    template: `
    <div class="keep-list">
        <div class="notes-container grid">
            <note v-for="note in notes" 
                :key="note.id" 
                :note="note"
                :isExpanded="note.id === noteToOpenId"
                @deleteNote="deleteNote"  
                @updateNoteColor="updateNoteColor(note)"
                @saveNoteChanges="saveChanges"
                @notePinned="notePinned(note)"
                @noteResize="noteResize(note)"
                :class="{'opened': note.id === noteToOpenId}">
            </note>            
        </div>
       <div v-if="noteToOpenId" @click="closeNote" class="backdrop"></div> 
    </div>
    `,
    data(){
        return {
            style: null,
            noteToOpenId: null,
            
        }
    },
    components: {
        note,
    },
    methods: {
        deleteNote(noteId){
            this.$emit('deleteNote', noteId);
        },
        saveChanges(note){
            this.$emit('saveNoteChanges', note);
        },
        closeEditor(){
            this.isOnEdit = !this.isOnEdit;
        },
        updateNoteColor(note) {
            this.$emit('updateNoteColor', note);
        },
        notePinned(note) {
            this.$emit('notePinned', note);
        },
        noteResize(note) {
            if(note.id === this.noteToOpenId) {
                this.noteToOpenId = null;
            }
            else {
                this.noteToOpenId = note.id; 
            }
        },
        closeNote(){
            this.noteToOpenId = null;
        }
    },

}