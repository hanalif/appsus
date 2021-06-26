export default {
    props:['data'],
    template: `
    <section class="action-btns flex content-center">
        <button class="keep-app-btn" @click="deleteNote"><i class="far fa-trash-alt"></i></button>
        <button class="keep-app-btn" @click="editNote"><i class="far fa-edit"></i></button>
        <button class="keep-app-btn" @click="opencolorPalette"><i class="fas fa-palette"></i></button>
        <button class="keep-app-btn" @click="onSendMail"><i class="fas fa-envelope"></i></button>
    </section>
    `,
    methods: {
        editNote(){
            this.$emit('editNote');
        },
        deleteNote(){
            this.$emit('deleteNote', this.data.id);
        },
        opencolorPalette(){
            this.$emit('opencolorPalette', this.data.id)
        },
        onSendMail() {
            let params = { subject: this.data.info.title, body: this.data.info.freeTxt };
            this.$router.push({ name: 'route.mail', query: params });
        }
    }
}