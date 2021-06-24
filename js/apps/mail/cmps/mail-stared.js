import mailPreview from './mail-preview.js';
import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    // props: ['mails'],
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
                const staredMails = mails.filter(mail => mail.isStared)
                this.mails = staredMails
                console.log(this.mails);
            })

        eventBus.$on('filtersUpdated', () => {
            mailService.getFilterdMails().then((mails) => {
                const staredMails = mails.filter(mail => mail.isStared)
                this.mails = staredMails;
            })
        });
    },
    computed: {
        mailsToShow(filterBy) {
            console.log('~ filterBy', filterBy)

        }
    },
}