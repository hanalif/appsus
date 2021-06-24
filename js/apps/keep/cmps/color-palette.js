export default {
    props:['data'],
    template: `
    <section class="color-palette">
        <div class="colors-container flex">
            <div class="color-circle" 
            v-for="(color, index) in colors"
            :style="{backgroundColor: colors[index]}" 
            :key="index" 
            @click="pickColor(index)">
            </div>
        </div>
    </section>
    `,
    data(){
        return{
            colors: ['#FBC6A4', '#F4A9A8', '#CE97B0', '#AFB9C8']
        }
    },
    methods: {
        pickColor(index){
            const color = this.colors[index];
            let colorStyle;
            if(this.data){
                colorStyle = {style: color, note: this.data}
            }else{
                colorStyle = color;
            }
            this.$emit('pickedColor', colorStyle);
        }
    },
}