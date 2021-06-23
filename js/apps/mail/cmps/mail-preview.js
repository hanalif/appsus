export default {
    props: ['mail'],
    template: `
    <div class="mail-preview flex space-evenly">
        <p>{{mail.name}}</p>
        <p>{{mail.subject}}</p>
        <p>{{mail.body}}</p>
        <p>{{timeForDisplay}}</p>
    </div>
    `,
    computed: {
        timeForDisplay() {
            const currDate = new Date(this.mail.sentAt)
            var houres = currDate.getHours()
            var minutes = currDate.getMinutes()
            if (houres < 10) houres = '0' + houres
            if (minutes < 10) minutes = '0' + minutes
            const dateFormat = `${houres}: ${minutes}`
            return dateFormat
        }
    },
}