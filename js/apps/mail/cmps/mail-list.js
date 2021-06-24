import mailPreview from './mail-preview.js';

export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
    <ul class="mail-list">
    <li v-for="mail in mails" :key="mail.id" class="mail-preview-container clean-list">
    <mail-preview :mail="mail" />
    </li>
    </ul>
    </section>
    `,
    components: {
        mailPreview
    }
}