export default {
    template: `
    <section class="header-app">
    <div class="header-container main-layout flex space-between">
    <h2>header</h2>
    <nav class="flex header-nav">
    <router-link to="/">Home Page</router-link>|
    <router-link to="/keep">Keep</router-link>|
    <router-link to="/mail">Mail</router-link>
    </nav>
    </div>
    </section>
    `
}