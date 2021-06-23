import keepList from "../cmps/keep-list.js"
import {keepService} from "../services/keep-service.js"

export default {
    template: `
    <section class="keep-app main-layout main-screen">
    <keep-list :notes="notesToShow"></keep-list>
    </section>
    `,
    data() {
        return {
            notes: [],
            filterBy: null
            
        }
    },
    computed: {
        notesToShow(){
            return this.notes
        }

    },
    created(){
        keepService.query()
            .then(notes => this.notes = notes)
    },
    components: {
        keepList
    }
}