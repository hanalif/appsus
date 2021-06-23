import keepPreview from './keep-preview.js';
import noteImg from './keep-items-cmps/note-img.js';
import actionBtns from './action-btns.js'
import noteImgEdit from './keep-items-edit/note-img-edit.js';



export default {
    props: ['notes'],
    template: `
    <div class="keep-list main-screen">
        <div class="notes-container">
        <div class="add-note-container">
        </div>
        
            <div class="note-container" v-for="note in notes" :key="note.id">
                <component
                    :is="note.type" 
                    :data="note"
                    >
                </component>
                <action-btns 
                :data="note" 
                @deleteNote="deleteNote" 
                @editNote="editNote">
                </action-btns>
                <div>COLOR_PALET_COMPONENT V-IF</div>
                <component v-if="isOnEdit"
                    :is="note.type + 'Edit'"
                    :data="note" 
                    @saveChanges="saveChanges(note, $event)"
                    @closeEditor="closeEditor"
                    >
                </component>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            isOnEdit: null,
        }
    },
    components: {
        keepPreview,
        noteImg,
        actionBtns,
        noteImgEdit
        
    },
    methods: {
        deleteNote(noteId){
            console.log(noteId);
            this.$emit('deleteNote', noteId);
        },
        editNote(){
            this.isOnEdit = !this.isOnEdit;
        },
        saveChanges(note, info){
            note.info = info;
            this.$emit('saveNoteChanges', note);
        },
        closeEditor(){
            this.isOnEdit = !this.isOnEdit;
        },
    },

}