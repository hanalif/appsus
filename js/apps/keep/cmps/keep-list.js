import note from './note.js';


export default {
    props: ['notes'],
    template: `
    <div class="keep-list">
        <div class="notes-container grid">
            <note v-for="note in notes" 
                :key="note.id" 
                :note="note"
                @deleteNote="deleteNote"  
                @updateNoteColor="updateNoteColor(note)"
                @saveNoteChanges="saveChanges">
            </note>
            
        </div>
    </div>
    `,
    data(){
        return {
            style: null
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
        }     
    },

}