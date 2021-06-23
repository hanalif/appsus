
export default {
    props:['data'],
    template: `
    <section class="note-video">
    <video :src="data.info.url"></video>
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