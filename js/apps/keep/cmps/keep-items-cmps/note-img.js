export default {
    props:['data'],
    template: `
    <section class="note-img">
    <h2>{{data.info.title}}</h2>
    <img :src="data.info.url" alt="">
    </section>
    `

}