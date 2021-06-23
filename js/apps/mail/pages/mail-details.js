// import { router } from "../../../routes.js"
import { mailService } from "../services/mail-service.js"


export default {
    template: `
    <section v-if="mail" class="mail-details main-layout main-screen">
    <router-link to="/mail" ><button>Back To Inbox</button></router-link>
    <router-link to="/mail" ><button @click="remove">delete</button></router-link>
    <router-link :to="'/mail/' + prevMailId" ><button @click="moveToPrevMail"><</button></router-link>
    <router-link :to="'/mail/' + nextMailId" ><button @click="moveToNextMail">></button></router-link>
    <h2>{{mail.subject}}</h2>
    <p class="sender"><span class="sent-name">{{mail.name}}</span> <{{mail.mailFrom}}> </p>
    <div class="mail-body-details">{{mail.body}}</div>
    </section>
    `,
    data() {
        return {
            mail: null,
            nextMailId: null,
            prevMailId: null
        }
    },
    computed: {

    },
    methods: {
        remove() {
            mailService.remove(this.mail.id)
        },
        moveToNextMail() {
            const { mailId } = this.$route.params;
            mailService.getById(+mailId)
                .then(mail => this.mail = mail);
            mailService.getNextMailId(+mailId)
                .then(mailId => this.nextMailId = mailId);
        },
        moveToPrevMail() {
            const { mailId } = this.$route.params;
            mailService.getById(+mailId)
                .then(mail => this.mail = mail);
            mailService.getPrevMailId(+mailId)
                .then(mailId => this.prevMailId = mailId);
        },
    },
    created() {
        const { mailId } = this.$route.params
        mailService.getById(+mailId)
            .then(mail => {
                mail.isRead = true
                mailService.save(mail)
                this.mail = mail
            })
    },
}