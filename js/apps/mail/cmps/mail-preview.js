import longText from "../../../cmps/long-text.js"

export default {
    props: ['mail'],
    template: `
    <router-link :to="'/mail/'+mail.id" >
    <div class="mail-preview flex space-between" :class="{opened: mail.isRead}">
        <p>{{mail.name}}</p>
        <span class="mail-txt flex">
        <p>{{mail.subject}}</p>
        <p class="mail-body flex">-<long-text :txt="mail.body"/></p>
        </span>
        <p>{{timeForDisplay}}</p>
        </div>
        </router-link>
    `,
    computed: {
        timeForDisplay() {
            const currDate = new Date(this.mail.sentAt)
            var houres = currDate.getHours()
            var minutes = currDate.getMinutes()
            if (houres < 10) houres = '0' + houres
            if (minutes < 10) minutes = '0' + minutes
            const dateFormat = `${houres}: ${minutes}`
            return dateFormat
        },
        mailReaded() {
            return { opened: this.mail.isRead }
        },

    },
    methods: {

    },
    components: {
        longText
    },
    created() {

    }
}