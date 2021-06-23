export default {
    props:['data'],
    template: `
    <section>
        <input v-model="imgUrl" type="url" name="url" id="url"
            placeholder="img URL">
        <input v-model="imgTitle" type="text" placeholder="title">
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