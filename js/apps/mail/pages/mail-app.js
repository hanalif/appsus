import mailList from '../cmps/mail-list.js';
import { mailService } from '../services/mail-service.js';
import mailFilter from '../cmps/mail-filter.js';
import mailCompose from '../cmps/mail-compose.js';
import mailMenu from '../cmps/mail-menu.js';


export default {
    template: `
    <section class="mail-app main-layout main-screen">
    <mail-filter @filtered="setFilter"/>
    <div class="app-container flex">
    <div class="app-actions">
    <mail-compose @uptdate-mail="uptdate"></mail-compose>
    <mail-menu class="flex column" />
    </div>
    <mail-list :mails="mailsToShow"></mail-list>
    </div>
    </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: null
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        uptdate() {
            mailService.query()
                .then(mails => {
                    this.mails = mails
                })
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails
            const searchStr = this.filterBy.txt.toLowerCase();
            const isRead = this.filterBy.isRead
            const mailsToShow = this.mails.filter(mail => {
                if (isRead === '1') return mail.body.toLowerCase().includes(searchStr) &&
                    this.mails
                else return mail.body.toLowerCase().includes(searchStr) &&
                    (isRead) ? mail.isRead : !mail.isRead
            });
            return mailsToShow;
        }
    },
    components: {
        mailList,
        mailFilter,
        mailCompose,
        mailMenu
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
            })

    }
}