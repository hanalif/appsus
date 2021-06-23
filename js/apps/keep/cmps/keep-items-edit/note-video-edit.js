export default {
    props:['data'],
    template: `
    <section class="note-video-edit">
        <input v-model="videoUrl" type="url" name="url" id="url"
            :placeholder="data.info.url">
        <input v-model="videoTitle" type="text" :placeholder="data.info.title">
        <button @click="saveChanges">✅</button>
        <button @click="closeEditor">X</button>
    </section>
    `,
    data(){
        return{
           videoUrl: null,
           videoTitle: null,
        }
    },
    methods: {
        saveChanges(){
            const savedData = {url: this.videoUrl, title: this.videoTitle}
            this.$emit('saveChanges', savedData);
        },
        closeEditor(){
            this.$emit('closeEditor');
        } 
    },
    
}