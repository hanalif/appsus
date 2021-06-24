export default{
    template: `
    <section class="notes-filter-container flex column">
        <div class="filter-search-container">
        <label class="filter-search-icon"><i class="fas fa-search"></i></label>
        <input class="search-field-filter" v-model="filterBy.title" type="text" @input="setFilterBy" placeholder="Search...">
        </div>
        <div class="check-box-container">
        <input type="radio"  v-model="filterBy.type" name="search" @input="setFilterBy" value="all" checked>
        <label for="all">All</label>
        <input type="radio" v-model="filterBy.type" name="search" @input="setFilterBy" value="noteImg">
        <label for="img">Images</label>
        <input type="radio"  v-model="filterBy.type" name="search" @input="setFilterBy" value="noteText" >
        <label for="text">Text</label>
        <input type="radio"  v-model="filterBy.type" name="search" @input="setFilterBy" value="noteVideo">
        <label for="video">Video</label>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                type: 'all',
                title: '' 
            }
        };
    },
    methods: {
        setFilterBy() {
            this.$emit('setFilterBy', this.filterBy);
        }
    },
};
