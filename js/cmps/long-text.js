export default {
    props: ['txt'],
    template: `
    <section class="flex">
    <p>{{getTextForDisplay}}</p>
    <p v-if="showBtn" >...</p>
    </section>
    `,
    data() {
        return {
            isLong: false
        }
    },
    methods: {
        setLong() {
            return this.txt.length > 20
        },


    },
    computed: {
        getTextForDisplay() {
            if (this.isLong) return this.txt.substring(0, 20);
            else return this.txt
        },
        showBtn() {
            return this.txt.length > 20
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