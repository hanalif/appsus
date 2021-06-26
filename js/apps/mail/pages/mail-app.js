import mailList from '../cmps/mail-list.js';
import { mailService } from '../services/mail-service.js';
import mailFilter from '../cmps/mail-filter.js';
import mailCompose from '../cmps/mail-compose.js';
import mailMenu from '../cmps/mail-menu.js';
import mailStatus from '../cmps/mail-status.js';

{ /* <mail-list :mails="mailsToShow"></mail-list> */ }

export default {
    template: `
    <section class="mail-app main-screen">
        <mail-filter @filtered="setFilter"/>
        <div class="app-container flex ">
            <div class="app-actions">
                <mail-compose @uptdate-mail="update"></mail-compose>
                <mail-status :mails="mails" class="mail-status"></mail-status>
                <mail-menu class="flex column" />
            </div>
            <router-view ></router-view>
        </div>
    </section>
    `,
    data() {
        return {
            mails: null,
        }
    },
    methods: {
        setFilter(filterBy) {
            mailService.setFilters(filterBy);
        },
        update() {
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
        mailMenu,
        mailStatus
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
            })

    }
}