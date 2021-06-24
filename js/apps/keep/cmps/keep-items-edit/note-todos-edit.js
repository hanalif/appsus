export default {
    props:['data'],
    template: `
    <section class="note-todos-edit">
        <input v-model="listTitle" type="text" :placeholder="data.info.title">
        <ul><li class="todos-container" v-for="todo in data.info.todos">
            <p>{{todo}}</p>
        </li></ul>
        <button @click="saveChanges">✅</button>
        <button @click="closeEditor">X</button>
    </section>
    `,
    data(){
        return{
           listTitle: null,
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


