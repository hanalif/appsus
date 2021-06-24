import homePage from './pages/home-page.js';
import keepApp from './apps/keep/pages/keep-app.js';
import mailApp from './apps/mail/pages/mail-app.js';
import mailDetails from './apps/mail/pages/mail-details.js';
import mailCompose from './apps/mail/cmps/mail-compose.js';
import mailStared from './apps/mail/cmps/mail-stared.js';
import mailInbox from './apps/mail/cmps/mail-inbox.js';



const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/mail',
        component: mailApp,
        redirect: {
            name: 'route.inbox'
        },
        children: [
            {
                path: 'stared',
                name: 'route.stared',
                component: mailStared
            },
            {
                path: 'inbox',
                name: 'route.inbox',
                component: mailInbox
            },
        ]
    },
    {
        path: '/mail/edit/:mailId?',
        component: mailCompose
    },
    {
        path: '/mail/:mailId',
        component: mailDetails
    }

];

export const router = new VueRouter({ routes })