import keepPreview from './keep-preview.js';

export default {
    props: ['keeps'],
    template: `
    <ul class="keep-list main-screen">
        <li v-for="keep in keeps" :key="keep.id" class="keep-preview-container">
            <keep-preview :keep="keep" @click.native="log(keep.id)" />
            <div class="actions">
                <button @click="remove(keep.id)">X</button>
                <router-link :to="'/keep/'+keep.id">Details</router-link>
                <router-link :to="'/keep/compose/'+keep.id">Edit</router-link>
            </div>
        </li>
    </ul>
    `,
    components: {
        keepPreview
    }
}