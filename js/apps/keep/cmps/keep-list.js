// cmps
import noteImg from './keep-items-cmps/note-img.js';
import noteTxt from './keep-items-cmps/note-txt.js';
import noteVideo from './keep-items-cmps/note-video.js';

// cmps to edit
import noteImgEdit from './keep-items-edit/note-img-edit.js';
import noteTxtEdit from './keep-items-edit/note-txt-edit.js';
import noteVideoEdit from './keep-items-edit/note-video-edit.js';


import actionBtns from './action-btns.js'
import colorPalette from './color-palette.js';



export default {
    props: ['notes'],
    template: `
    <div class="keep-list main-screen">
        <div class="notes-container grid">
        <div class="add-note-container">
        </div>
            <div class="note-container"  
            v-for="note in notes" 
            :key="note.id" 
            :style=" {'background-color': note.style}">

                <component
                    :is="note.type" 
                    :data="note"
                    >
                </component>

                <action-btns 
                :data="note" 
                @deleteNote="deleteNote" 
                @editNote="editNote"
                @opencolorPalette="opencolorPalette"
                > 
                </action-btns>

                <color-palette 
                v-if="isOnColorPalette" 
                :data="note" 
                @pickedColor="updateNoteColor">
                </color-palette>

                <component v-if="isOnEdit"
                    :is="note.type + 'Edit'"
                    :data="note" 
                    @saveChanges="saveChanges(note, $event)"
                    @closeEditor="closeEditor">
                </component>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            isOnEdit: null,
            isOnColorPalette: null,
            style: null
        }
    },
    components: {
        noteImg,
        noteTxt,
        noteVideo,
        actionBtns,
        noteImgEdit,
        noteTxtEdit,
        noteVideoEdit,
        colorPalette
        
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
        updateNoteColor(styleData){
            let note = styleData.note;
            let style = styleData.style;
            if(!note.style){
                note.style = '#F4A9A8'
            } else{
                style = note.style;
            }
            this.$emit('updateNoteColor', styleData);
            }     
    },

}