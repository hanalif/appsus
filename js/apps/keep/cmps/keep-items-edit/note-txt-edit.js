export default {
    props:['data'],
    template: `
    <section class="note-txt-edit note-edit-container flex content-center align-center column">
        <input class="note-edit-input" v-model="txtTitle" type="text" :placeholder="data.info.title">
        <input class="note-edit-input" v-model="freeTxt" type="text" :placeholder="data.info.freeTxt">
        <div class="note-edit-btns-container">
            <button class="keep-app-btn" @click="saveChanges"><i class="fas fa-check"></i></button>
        </div>
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
    },
    
}