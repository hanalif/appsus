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
            mails: []
        }
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
            })
    }
}