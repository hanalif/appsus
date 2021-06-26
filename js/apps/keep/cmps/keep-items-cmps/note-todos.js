export default {
    props:['data'],
    template: `
    <section class="note-todos flex column note-top-margin">
        <h2>{{data.info.title}}</h2>
        <div class="add-new-note-container flex">
            <input class="add-new-todo-input-field" v-model="addedNewTodo" type="text">
            <button class="keep-app-btn" @click="addTodo"><i class="fas fa-check"></i></button>
        </div>   
        <ul class="note-todos-list flex column">
            <li class="todo-item flex" v-for="(todo, index) in data.info.todos" :key="index"> 
                <h4 class="note-todo-list" @click="markedTodo(index)" :class=" {'marked-todo': todo.isMarked}">{{todo.txt}}</h4>
                <button class="keep-app-btn" @click="deleteTodo(index)"><i class="fas fa-times"></i></button>
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
            if(this.addedNewTodo === '')return
            let todos = this.data.info.todos;
            let newTodo = {txt: this.addedNewTodo, isMarked:false, doneAt: null}
            todos.push(newTodo);

        },
        markedTodo(index){
            let todos = this.data.info.todos;
            let currTodo = todos[index];
            currTodo.isMarked = !currTodo.isMarked;
        }
    },

}
