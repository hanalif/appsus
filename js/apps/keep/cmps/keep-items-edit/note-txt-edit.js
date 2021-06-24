export default {
    props:['data'],
    template: `
    <section class="note-txt-edit">
        <input v-model="txtTitle" type="text" :placeholder="data.info.title">
        <input v-model="freeTxt" type="text" :placeholder="data.info.freeTxt">
            :placeholder="data.info.url">
        <button @click="saveChanges">✅</button>
        <button @click="closeEditor">X</button>
    </section>
    `,
    data(){
        return{
           txtTitle: null,
           freeTxt: null
        }
    },
    methods: {
        saveChanges(){
            if(!this.txtTitle) this.txtTitle = this.data.info.title;
            if(!this.freeTxt) this.freeTxt = this.data.info.freeTxt;

            const savedData = {title: this.txtTitle, freeTxt: this.freeTxt}
            this.$emit('saveChanges', savedData);
        },
        closeEditor(){
            this.$emit('closeEditor');
        } 
    },
    
}