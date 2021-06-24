import { mailService } from "../services/mail-service.js";
import { eventBus } from '../../../services/event-bus-service.js'


import mailCompose from "../cmps/mail-compose.js";

export default {
    template: `
    <section v-if="mail" class="mail-details main-layout main-screen">
    <router-link to="/mail" ><button>Back To Inbox</button></router-link>
    <router-link to="/mail" ><button @click="remove">delete</button></router-link>
    <router-link :to="'/mail/' + prevMailId" ><button @click="moveToPrevMail"><</button></router-link>
    <router-link :to="'/mail/' + nextMailId" ><button @click="moveToNextMail">></button></router-link>
    <button @click="edit = true">edit</button>
    <mail-compose v-if="edit"></mail-compose>
    <h2>{{mail.subject}}</h2>
    <p class="sender"><span class="sent-name">{{mail.name}}</span> <{{mail.mailFrom}}> </p>
    <div class="mail-body-details">{{mail.body}}</div>
    </section>
    `,
    // <router-link :to="'/mail/edit/'+mail.id"><button >edit</button></router-link>
    data() {
        return {
            mail: null,
            nextMailId: null,
            prevMailId: null,
            edit: false
        }
    },
    computed: {

    },
    components: {
        mailCompose
    },

    methods: {
        remove() {
            mailService.remove(this.mail.id)
        },
        moveToNextMail() {
            const { mailId } = this.$route.params;
            mailService.getNextMailId(mailId)
                .then(nextMailId => {
                    this.nextMailId = nextMailId
                    mailService.getById(nextMailId)
                        .then(mail => this.mail = mail);
                });
        },
        moveToPrevMail() {
            const { mailId } = this.$route.params;
            mailService.getPrevMailId(mailId)
                .then(prevMailId => {
                    this.prevMailId = prevMailId
                    mailService.getById(prevMailId)
                        .then(mail => { this.mail = mail });
                });
        },
    },
    created() {
        const { mailId } = this.$route.params
        mailService.getById(mailId)
            .then(mail => {
                mail.isRead = true
                mailService.save(mail)
                this.mail = mail
            })
    },
}