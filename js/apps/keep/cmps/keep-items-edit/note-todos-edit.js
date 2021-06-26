export default {
    props:['data'],
    template: `
    <section class="note-todos-edit note-edit-container flex content-center align-center column">
        <input class="note-edit-input" v-model="listTitle" type="text" :placeholder="data.info.title">
        <div class="note-edit-btns-container">
            <button class="keep-app-btn" @click="saveChanges"><i class="fas fa-check"></i></button>
            <button class="keep-app-btn" @click="closeEditor"><i class="fas fa-times"></i></button>
        </div>
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


