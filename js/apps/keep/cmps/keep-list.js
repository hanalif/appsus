import keepPreview from './keep-preview.js';
import noteImg from './keep-items-cmps/note-img.js'


export default {
    props: ['notes'],
    template: `
    <div class="keep-list main-screen">
    <component v-for="note in notes" :key="note.id"
    :is="note.type" 
    :data="note">
    </component>
    </div>
    `,
    data(){
        return {
            
        }
    },
    components: {
        keepPreview,
        noteImg
        
    }
}