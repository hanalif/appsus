export default {
    props:['data'],
    template: `
    <section class="action-btns">
    <button  @click="deleteNote">🚮</button>
    <button @click="editNote">📝</button>
    </section>
    `,
    methods: {
        editNote(){
            this.$emit('editNote');
        },
        deleteNote(){
            this.$emit('deleteNote', this.data.id);
        }
    }
}