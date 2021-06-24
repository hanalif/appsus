import colorPalette from './color-palette.js'
export default {
    template: `
    <section class="input-for-new-note flex" :style=" {'background-color': style}">
    <input type="text" v-model="title" placeholder="Title">
    <input type="text" v-model="text" :placeholder="placeHolderTxt">
    <button @click="setNoteType('note-txt')">A</button>
        <button @click="setNoteType('note-img')">img</button>
        <button @click="setNoteType('note-video')">video</button>
        <button @click="opencolorPalette">🎨</button>
        <color-palette v-if="isOnColorPalette" @pickedColor="pickedColor"></color-palette>
        <button @click="createNote">save</button>
        <button @click="closeInputForNewNote">X</button>
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
        closeInputForNewNote(){
           this.$emit('closeInputForNewNote');
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