import inputForNewNote from './input-for-new-note.js'

export default {
    template: `
    <div class="note-add flex row ">
        <button title="add new note" @click="addNewNote" class="add-note-btn keep-app-btn flex content-center align-center"> 
            <i class="fas fa-plus"></i></button>
        <input-for-new-note class="input-for-new-note-container" v-if="isAddNoteOpen" @createNote="createNote"></input-for-new-note>
    </div>
    `,
    data(){
        return {
            isAddNoteOpen: null,
        }
    },
    methods: {
        createNote(newNoteData) {
            this.$emit('createNote', newNoteData);
            this.isAddNoteOpen = !this.isAddNoteOpen;

        },
        addNewNote(){
           this.isAddNoteOpen = !this.isAddNoteOpen;
        },
    },
    components:{
        inputForNewNote
    }
}