export default {
    props: ['mails'],
    template: `
    <section v-if="mails">
    <div class="present-container">
    <div class="present-count" :style="{width: showPresent+'%'}">
    <h3>{{showPresent}}%</h3>
            </div>
        </div>
    </section>
    `,
    computed: {
        countUnreadMails() {
            return this.mails.filter(m => m.isRead).length
        },
        showPresent() {
            return Math.floor(this.countUnreadMails / this.mails.length * 100)
        }
    }
}