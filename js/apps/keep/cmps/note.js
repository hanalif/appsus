// cmps
import noteImg from './keep-items-cmps/note-img.js';
import noteTxt from './keep-items-cmps/note-txt.js';
import noteVideo from './keep-items-cmps/note-video.js';
import noteTodos from './keep-items-cmps/note-todos.js';

// cmps to edit
import noteImgEdit from './keep-items-edit/note-img-edit.js';
import noteTxtEdit from './keep-items-edit/note-txt-edit.js';
import noteVideoEdit from './keep-items-edit/note-video-edit.js';
import noteTodosEdit from './keep-items-edit/note-todos-edit.js';

import actionBtns from './action-btns.js';
import colorPalette from './color-palette.js';


export default {
    props: ['note'],
    template: `
    <div class="note">
        <button class="pin-btn" :class="{ 'is-pinned': note.isPinned }" @click="onPinButtonClick"><i class="fas fa-thumbtack"></i></button>
        <div class="note-container flex column content-center align-center" 
            :style=" {'background-color': note.style}">
            <component
                :is="note.type" 
                :data="note">
            </component>
            <div class="action-btns-and-color-palette-and-edit-container flex column">
                <action-btns 
                    :data="note" 
                    @deleteNote="deleteNote" 
                    @editNote="editNote"
                    @opencolorPalette="opencolorPalette"> 
                </action-btns>
                <color-palette 
                    v-if="isOnColorPalette" 
                    :data="note" 
                    @pickedColor="updateNoteColor">
                </color-palette>
                <div class="edit-container">
                    <component v-if="isOnEdit"
                        :is="note.type + 'Edit'"
                        :data="note" 
                        @saveChanges="saveChanges(note, $event)"
                        @closeEditor="closeEditor">
                    </component>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            isOnEdit: false,
            isOnColorPalette: false
        }
    },
    methods: {
        deleteNote(noteId){
            this.$emit('deleteNote', noteId);
        },
        opencolorPalette(noteId){
            this.isOnColorPalette = !this.isOnColorPalette;
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
        updateNoteColor(color) {
            if(!color){
                this.note.style = '#F4A9A8';
            } else{
                this.note.style = color;
            }
            this.$emit('updateNoteColor', color);
        },
        onPinButtonClick() {
            this.$emit('notePinned');
        }    
    },
    components: {
        noteImg,
        noteTxt,
        noteVideo,
        actionBtns,
        noteTodos,
        noteImgEdit,
        noteTxtEdit,
        noteVideoEdit,
        noteTodosEdit,
        colorPalette
    },
   
}