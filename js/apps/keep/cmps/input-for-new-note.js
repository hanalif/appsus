import colorPalette from './color-palette.js'
export default {
    template: `
    <section class="input-for-new-note flex align-center column" :style=" {'background-color': style}">
    <div class="inputs-btns-container inputs-btns-container flex content-center align-center">
        <button class="keep-app-btn new-note-btn" title="add new text note"  @click="setNoteType('note-txt')"><i class="fas fa-font"></i></button>
        <button class="keep-app-btn new-note-btn" title="add new image note" @click="setNoteType('note-img')"><i class="far fa-image"></i></button>
        <button class="keep-app-btn new-note-btn" title="add new youtube video note" @click="setNoteType('note-video')"><i class="fab fa-youtube"></i></button>
        <button class="keep-app-btn new-note-btn" title="add new list note" @click="setNoteType('note-todos')"><i class="fas fa-list-ul"></i></button>
    </div>
    <input class="new-note-input-field" type="text" v-model="title" placeholder="Title">
    <input class="new-note-input-field" type="text" v-model="text" :placeholder="placeHolderTxt">
    <div class="inputs-btns-container flex content-center align-center">
        <button class="keep-app-btn new-note-btn" @click="opencolorPalette"><i class="fas fa-palette"></i></button>
        <color-palette title="change note background color" v-if="isOnColorPalette" @pickedColor="pickedColor"></color-palette>
        <button title="save note" class="keep-app-btn new-note-btn" @click="createNote"><i class="fas fa-arrow-down"></i></button>
    </div>
        
    </section>
    `,
    data(){
        return {
            title: '',
            text: '',
            style: '',
            noteType: 'note-txt',
            isOnColorPalette: null,
            style: '#ffff'
        }
    },
    methods: {
        setNoteType(noteType) {
            this.noteType = noteType;
        },
        opencolorPalette(){
            this.isOnColorPalette = !this.isOnColorPalette;
        },
        pickedColor(color){
            this.style = color;
        },
        createNote() {
            if(this.text !== '' && this.title !== '') {
                this.$emit('createNote', { noteType: this.noteType, title: this.title, text: this.text, style: this.style });
            }
        },
    },
    computed:{
        placeHolderTxt(){
            let placeholderText = '';
            switch (this.noteType) {
                case 'note-txt':
                    placeholderText = 'Whats on your mind';
                    break;
                case 'note-img':
                    placeholderText = 'Enter image URL';
                    break;
                case 'note-todos':
                    placeholderText = 'Enter comma seperated list';
                    break;
                case 'note-video':
                    placeholderText = 'Enter YouTube URL';
                    break;
                default:
                    break;
            }
            return placeholderText;
        }

    },
    setNoteType(noteType) {
        this.noteType = noteType;
    },
    components:{
        colorPalette
    }

}