export default {
    template: `
    <section >
        <div class="filter-search-container">
        <label  class="filter-search-icon"><i class="fas fa-search"></i></label>
        <input  class="text-input" type="text" v-model="filterBy.txt" @input="filter" placeholder="Search..."/>
        </div>
        <div class="filter-radio flex">
        <input type="radio" id="all" name="isRead" v-model="filterBy.readStatus" value="all" @change="filter">
        <label for="all">All</label>
        <input type="radio" id="read" name="isRead" v-model="filterBy.readStatus" value="read" @change="filter">
        <label for="read">Read</label>
        <input type="radio" id="unRead" name="isRead" v-model="filterBy.readStatus" value="unRead" @change="filter">
        <label for="unRead">Unread</label>
        </div>
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