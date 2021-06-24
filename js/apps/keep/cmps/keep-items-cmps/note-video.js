export default {
    props:['data'],
    template: `
    <section class="note-video">
    <iframe width="420" height="315" :src="formatedUrl"></iframe>
                                         
    <h2>{{data.info.title}}</h2>
    </section>
    `,
    data(){
        return {
            noteId: this.data.id
        }
    },
    computed: {
        formatedUrl(){
            let url = this.data.info.url
            let formatedUrl = url.replace('watch?v=','embed/')
            return formatedUrl;
        }
    },
}