import mailPreview from './mail-preview.js';
import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    props: [],
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
            mails: []
        }
    },
    created() {
        let parameters = this.$route.query;
        if (parameters && parameters.subject && parameters.body) {
            const newMail = { subject: parameters.subject, body: parameters.body };
            mailService.addNewMail(newMail).then(() => {
                mailService.query().then(mails => {
                    this.mails = mails;
                    console.log(mails);
                    this.$router.replace({'subject': null, 'body': null});
                });
            })
        }
        else {
            mailService.query().then(mails => {
                this.mails = mails;
                console.log(mails);
            });
        }

        eventBus.$on('filtersUpdated', () => {
            mailService.getFilterdMails().then((mails) => {
                this.mails = mails;
            })
        });
    },
}