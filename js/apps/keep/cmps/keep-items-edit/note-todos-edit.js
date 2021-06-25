export default {
    props:['data'],
    template: `
    <section class="note-todos-edit">
        <input v-model="listTitle" type="text" :placeholder="data.info.title">
        <button @click="saveChanges">✅</button>
        <button @click="closeEditor">X</button>
    </section>
    `,
    data(){
        return{
           listTitle: null,
           todos: this.data.info.todos
        }
    },
    methods: {
        addNewTodo(){
            let currTodo = this.newTodo;
            this.dotos.push(currTodo);
            this.newTodo = '';
        },
        saveChanges(){
            const savedData = { title: this.listTitle, todos: this.todos }
            this.$emit('saveChanges', savedData);
        },
        closeEditor(){
            this.$emit('closeEditor');
        }
    },
    
}


