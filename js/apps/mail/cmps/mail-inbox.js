import mailPreview from './mail-preview.js';
import { mailService } from '../services/mail-service.js';

export default {
    props: ['mails'],
    template: `
    <section v-if="mails" class="mail-list">
    <ul class="mail-list">
    <li v-for="mail in mails" :key="mail.id" class="mail-preview-container clean-list">
    <mail-preview :mail="mail" />
    </li>
    </ul>
    </section>
    `,
    components: {
        mailPreview
    },
    data() {
        return {
            mails: [],

        }
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
                console.log(this.mails);
            })
        eventBus.$on('filter', (filterBy) => {
            console.log('~ filterBy', filterBy)
            if (!filterBy) return this.mails
            const searchStr = filterBy.txt.toLowerCase();
            const isRead = filterBy.isRead
            const mailsToShow = this.mails.filter(mail => {
                if (isRead === '1') return mail.body.toLowerCase().includes(searchStr) &&
                    this.mails
                else return mail.body.toLowerCase().includes(searchStr) &&
                    (isRead) ? mail.isRead : !mail.isRead
            });
            this.mails = mailsToShow;
        })
    },
}