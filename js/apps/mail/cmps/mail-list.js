import mailPreview from './mail-preview.js';

export default {
    props: ['mails'],
    template: `
    <ul class="mail-list main-screen">
        <li v-for="mail in mails" :key="mail.id" class="mail-preview-container">
            <mail-preview :mail="mail" @click.native="log(mail.id)" />
            <div class="actions">
                <button @click="remove(mail.id)">X</button>
                <router-link :to="'/mail/'+mail.id">Details</router-link>
                <router-link :to="'/mail/compose/'+mail.id">Edit</router-link>
            </div>
        </li>
    </ul>
    `,
    components: {
        mailPreview
    }
}