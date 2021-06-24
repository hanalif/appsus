export default{
    template: `
    <section class="notes-filter">
        <label>Search:</label>
        <input v-model="filterBy.title" type="text" @input="filter" placeholder="Search...">
        <div class="check-box-container">
        <input type="radio" name="search" @input="filterType" value="all" checked>
        <label for="all">All</label>
        <input type="radio" name="search" @input="filterType" value="note-img">
        <label for="img">Images</label>
        <input type="radio" name="search" @input="filterType" value="note-text" >
        <label for="text">Text</label>
        <input type="radio" name="search" @input="filterType" value="note-video">
        <label for="video">Video</label>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                type: '',
                title: '' 
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    },
    filterType(){
        
    }
};
