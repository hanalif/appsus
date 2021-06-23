export default {
    props:['data'],
    template: `
    <section class="note-img-edit">
        <input v-model="imgUrl" type="url" name="url" id="url"
            :placeholder="data.info.url">
        <input v-model="imgTitle" type="text" :placeholder="data.info.title">
        <button @click="saveChanges">✅</button>
        <button @click="closeEditor">X</button>
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
            const savedData = {url: this.imgUrl, title: this.imgTitle}
            this.$emit('saveChanges', savedData);
        },
        closeEditor(){
            this.$emit('closeEditor');
        } 
    },
    
}