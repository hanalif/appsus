import { mailService } from "../services/mail-service.js";
import { eventBus } from '../../../services/event-bus-service.js'


import mailCompose from "../cmps/mail-compose.js";

export default {
    template: `
    <section v-if="mail" class="mail-details main-layout main-screen">
        <div class="actions flex space-between">
            <div class="actions-left">
                <router-link to="/mail" ><button class="details-btns back-btn" title="back to inbox">⬅</button></router-link>
                <button @click="setStared" title="star mail" class="details-btns">{{star}}</button>
                <router-link to="/mail" ><i title="delete mail" @click="remove" class="fa fa-trash details-btns" aria-hidden="true"></i></router-link>
                <router-link :to="{ path: '/keep', query: { title: mail.subject, text: mail.body }}"><i title="send to keep" class="fa fa-sticky-note details-btns" aria-hidden="true"></i></router-link>
                <i title="edit mail" @click="edit = true" class="fas fa-reply details-btns"></i>
                <mail-compose v-if="edit"></mail-compose>
            </div>
            <div class="actions-right">
                <router-link :to="'/mail/' + prevMailId" ><button title="previous mail" class="arows-btns details-btns" @click="moveToPrevMail"><</button></router-link>
                <router-link :to="'/mail/' + nextMailId" ><button title="next mail" class="arows-btns details-btns" @click="moveToNextMail">></button></router-link>
            </div>
        </div>
        <h2 class="mail-sub-details">{{mail.subject}}</h2>
        <p class="sender"><span class="sent-name">{{mail.name}}</span> <{{mail.mailFrom}}> </p>
        <div class="mail-body-details">{{mail.body}}</div>
    </section>
    `,
    data() {
        return {
            mail: null,
            nextMailId: null,
            prevMailId: null,
            edit: false,
            star: '⭐'
        }
    },
    computed: {

    },
    components: {
        mailCompose
    },

    methods: {
        setStared() {
            this.mail.isStared = !this.mail.isStared
            if (this.mail.isStared) this.star = '★'
            else this.star = '⭐'
            mailService.save(this.mail)
        },
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
                if (mail.isStared) this.star = '★'
                else this.star = '⭐'
            })
    },
}