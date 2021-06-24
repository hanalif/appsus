export default {
    props:['data'],
    template: `
    <section class="note-todos">
    <h2>{{data.info.title}}</h2>
    <p>{{data.info.}}</p>

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
