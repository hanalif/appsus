import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'
import { router } from './routes.js'




const options = {
    el: '#app',
    router,
    template: `
        <section style="height:0px">
            <app-header />
            <router-view />
            <app-footer />
        </section>
    `,
    components: {
        appHeader,
        appFooter
    }
};

const app = new Vue(options);