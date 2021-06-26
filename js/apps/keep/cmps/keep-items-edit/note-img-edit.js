export default {
    props:['data'],
    template: `
    <section class="note-img-edit note-edit-container flex content-center align-center column">
        <input class="note-edit-input"  v-model="imgUrl" type="url" name="url" id="url"
            :placeholder="data.info.url">
        <input class="note-edit-input" v-model="imgTitle" type="text" :placeholder="data.info.title">
        <div class="note-edit-btns-container">
            <button  class="keep-app-btn" @click="saveChanges"><i class="fas fa-check"></i></button>
        </div>
    </section>
    `,
    data(){
        return{
           imgUrl: null,
           imgTitle: null,
        }
    },
    methods: {
        saveChanges(){
            if(!this.imgUrl) this.imgUrl = this.data.info.url;
            if(!this.imgTitle) this.imgTitle = this.data.info.title;
            const savedData = {url: this.imgUrl, title: this.imgTitle}
            this.$emit('saveChanges', savedData);
        },

    },
    
}