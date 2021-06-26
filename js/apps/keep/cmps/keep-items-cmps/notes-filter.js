export default{
    template: `
    <section class="notes-filter-container flex column">
        <div class="check-box-container flex">
            <div class="input-label-filter-container" title="filter all notes">
                <input type="radio"  v-model="filterBy.type" name="search" @input="setFilterBy" value="all" checked>
                <label  for="all">All</label>
            </div>
            <div class="input-label-filter-container" title="filter images notes">
                <input type="radio" v-model="filterBy.type" name="search" @input="setFilterBy" value="noteImg">
                <label  for="img"><i class="far fa-image"></i></label>
            </div>
            <div class="input-label-filter-container" title="filter text notes">
                <input type="radio"  v-model="filterBy.type" name="search" @input="setFilterBy" value="noteTxt" >
                <label  for="text"><i class="fas fa-font"></i></label>
            </div>
            <div class="input-label-filter-container" title="filter youtube video notes">
                <input type="radio"  v-model="filterBy.type" name="search" @input="setFilterBy" value="noteVideo">
                <label  for="video"><i class="fab fa-youtube"></i></label>
            </div>
            <div class="input-label-filter-container" title="filter list notes" >
                <input type="radio"  v-model="filterBy.type" name="search" @input="setFilterBy" value="noteTodos">
                <label for="video"><i class="fas fa-list-ul"></i></label>
            </div>
        </div>
        <div class="filter-search-container">
            <label class="note-filter-search-icon"><i class="fas fa-search"></i></label>
            <input class="search-field-filter" v-model="filterBy.title" type="text" @input="setFilterBy" placeholder="Search...">
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
