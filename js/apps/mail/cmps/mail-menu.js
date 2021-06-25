export default {
    template: `
    <section class="mail-menu-container">
    <router-link to="/mail/inbox" active-class="active-link" class="mail-menu" @click="inbox">📥  inbox</router-link>
    <router-link to="/mail/stared" class="mail-menu" active-class="active-link" @click="stared">★  stared</router-link>
    <router-link to="/mail/sent" active-class="active-link" class="mail-menu" @click="inbox">📤  sent mail</router-link>
    <router-link to="/mail/draft" active-class="active-link" class="mail-menu" @click="inbox">📄  draft</router-link>
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