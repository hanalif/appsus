export default {
    template: `
    <section>
    <router-link to="/mail/inbox"><button @click="inbox">inbox</button></router-link>
    <router-link to="/mail/stared"><button @click="stared">stared</button></router-link>
    <button>sent mail</button>
    <button>draft</button>
    </section>
    `,
    methods: {
        stared() {
            this.$emit('stared')
        },
        inbox() {
            this.$emit('inbox')
        }
    }

}