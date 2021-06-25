export default {
    props:['data'],
    template: `
    <section class="note-todos">
    <h2>{{data.info.title}}</h2>
    <input class="add-new-todo-input-field" v-model="addedNewTodo" type="text">
    <button @click="addTodo">+</button>
    <ul class="note-todos-list">
        <li v-for="(todo, index) in data.info.todos" :key="index" class="todo-item"> 
            <h4 @click="markedTodo(index)" :class=" {'marked-todo': todo.isMarked}">>{{todo.txt}}</h4>
            <button @click="deleteTodo(index)"><i class="fas fa-times"></i></button>
        </li>
    </ul>

    </section>
    `,
    data(){
        return {
            noteId: this.data.id,
            addedNewTodo: '',
        }
    },
    methods: {
        deleteTodo(index){
            let todos = this.data.info.todos;
            todos.splice(index, 1);
        },
        addTodo(){
            let todos = this.data.info.todos;
            todos.push(this.addedNewTodo);
            this.addedNewTodo = '';

        },
        markedTodo(index){
            let todos = this.data.info.todos;
            let currTodo = todos[index];
            currTodo.isMarked = !currTodo.isMarked;
        }
    },

}
