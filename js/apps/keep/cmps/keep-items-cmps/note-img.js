export default {
    props:['data'],
    template: `
    <section class="note-img">
    <img class="img-note" :src="data.info.url" alt="img">
    <h2>{{data.info.title}}</h2>
    </section>
    `,
    data(){
        return {
            noteId: this.data.id
        }
    },
    methods: {
    },

}