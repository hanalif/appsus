export default {
    props:['data'],
    template: `
    <section class="note-video-edit note-edit-container flex content-center align-center column">
        <input class="note-edit-input" v-model="videoUrl" type="url" name="url" id="url"
            :placeholder="data.info.url">
        <input class="note-edit-input" v-model="videoTitle" type="text" :placeholder="data.info.title">
        <div class="note-edit-btns-container">
            <button class="keep-app-btn" @click="saveChanges"><i class="fas fa-check"></i></button>
        </div>
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
    },
    
}