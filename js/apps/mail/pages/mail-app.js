import mailList from '../cmps/mail-list.js';
import { mailService } from '../services/mail-service.js';

export default {
    template: `
    <section class="mail-app main-layout main-screen">
    <h2>Mail App</h2>
    <mail-list :mails="this.mails"></mail-list>
    </section>
    `,
    data() {
        return {
            mails: null,
        }
    },
    components: {
        mailList
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
            })
    }
}