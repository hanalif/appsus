export default {
    template: `
    <section>
    <input type="text" v-model="filterBy.txt" @input="filter" placeholder="Search by text..."/>
    <input type="radio" id="all" name="isRead" value="all" @input="allMails">
    <label for="all">All</label>
    <input type="radio" id="read" name="isRead" value="read" @input="readed">
    <label for="read">Read</label>
    <input type="radio" id="unRead" name="isRead" value="unRead" @input="unReaded">
    <label for="unRead">Unread</label>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                isRead: '1'
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        },
        readed() {
            this.filterBy.isRead = true
            this.$emit('filtered', this.filterBy);
        },
        unReaded() {
            this.filterBy.isRead = false
            this.$emit('filtered', this.filterBy);
        },
        allMails() {
            this.filterBy.isRead = '1'
            this.$emit('filtered', this.filterBy);
        }
    }
}