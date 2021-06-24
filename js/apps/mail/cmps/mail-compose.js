import { mailService } from "../services/mail-service.js";


export default {
    template: `
    <div class="mail-compose ">
        <button @click="mailBox = true" v-if="openCompose">+ Compose</button>
        <div class="compose-mail" v-if="mailBox">
        <div class="compose-head flex space-between">
        <p>{{title}}</p>
        <button @click="mailBox = false">x</button>
        </div>
        <form class="flex column" @submit.prevent="sendMail">
        <input type="text" placeholder="to">
        <input v-model="newMail.subject" type="text" placeholder="subject">
        <input v-model="newMail.body" class="compose-body" type="text" placeholder="body">
        <button class="compose-btn">send</button>
        </form>
        </div>
    </div>
    `,
    data() {
        return {
            newMail: {
                subject: '',
                body: '',
                id: null
            },
            mailBox: false,
        }
    },
    created() {
        const { mailId } = this.$route.params;
        if (mailId) {
            mailService.getById(mailId)
                .then(mail => {
                    this.newMail.subject = mail.subject
                    this.newMail.body = mail.body
                    this.newMail.id = mail.id
                });
        }
    },
    computed: {
        title() {
            return this.$route.params.mailId ? 'Edit mail' : 'new mail';
        },
        openCompose() {
            if (this.$route.params.mailId) {
                this.mailBox = true
                return false
            } else {
                this.mailBox = false
                return true
            }
        }
    },
    methods: {
        sendMail() {
            mailService.save(this.newMail)
                .then(() => {
                    console.log('~ this.newMail', this.newMail)
                    this.$emit('uptdate-mail')
                    this.mailBox = false
                    this.newMail.subject = ''
                    this.newMail.body = ''
                    this.newMail.id = null
                })

        },
    },

}