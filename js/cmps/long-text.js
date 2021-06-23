export default {
    props: ['txt'],
    template: `
    <section>
    <p>{{getTextForDisplay}}</p>
    <button v-if="showBtn"  @click="isLong = !isLong">{{setBtnTxt}}</button>
    </section>
    `,
    data() {
        return {
            isLong: false
        }
    },
    methods: {
        setLong() {
            return this.txt.length > 100
        },


    },
    computed: {
        getTextForDisplay() {
            if (this.isLong) return this.txt.substring(0, 100);
            else return this.txt
        },
        showBtn() {
            return this.txt.length > 100
        },
        setBtnTxt() {
            if (this.isLong) return 'read more'
            else return 'read less'
        }
    },
    created() {
        this.isLong = this.setLong()
    }
};