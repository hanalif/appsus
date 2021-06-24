import inputForNewNote from './input-for-new-note.js'

export default {
    template: `
    <div class="note-add main-screen">
        <input type="text" @focus="onFocusClick" placeholder="Title" v-if="!onFocus">
        <div class="input-for-new-note-container" v-else>
            <input-for-new-note @createNote="createNote" @closeInputForNewNote="closeInputForNewNote"></input-for-new-note>
        </div>
    </div>
    `,
    data(){
        return {
            onFocus: null,
        }
    },
    methods: {
        createNote(newNoteData) {
            this.$emit('createNote', newNoteData);
            this.onFocus = !this.onFocus;

        },
        onFocusClick(){
           this.onFocus = !this.onFocus;
        },
        closeInputForNewNote(){
            this.onFocus = false;
        }
    },
    components:{
        inputForNewNote
    }
}