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
            if(!this.videoUrl) this.videoUrl = this.data.info.url;
            if(!this.videoTitle) this.videoTitle = this.data.info.title;
            let url = this.videoUrl;
            let formatedUrl = url.replace('watch?v=','embed/')
            const savedData = {url: formatedUrl, title: this.videoTitle}
            this.$emit('saveChanges', savedData);
        },
        closeEditor(){
            this.$emit('closeEditor');
        } 
    },
    
}