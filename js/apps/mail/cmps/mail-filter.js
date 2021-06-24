
export default {
    template: `
    <section>
        <input type="text" v-model="filterBy.txt" @input="filter" placeholder="Search by text..."/>
        <input type="radio" id="all" name="isRead" v-model="filterBy.readStatus" value="all" @change="filter">
        <label for="all">All</label>
        <input type="radio" id="read" name="isRead" v-model="filterBy.readStatus" value="read" @change="filter">
        <label for="read">Read</label>
        <input type="radio" id="unRead" name="isRead" v-model="filterBy.readStatus" value="unRead" @change="filter">
        <label for="unRead">Unread</label>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                readStatus: 'all',
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        },
    }
}