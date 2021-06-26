export default {
    props:['data'],
    template: `
    <section class="note-txt note-top-margin">
    <h2>{{data.info.title}}</h2>
    <p>{{data.info.freeTxt}}</p>
    
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
