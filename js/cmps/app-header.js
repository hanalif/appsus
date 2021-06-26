export default {
    template: `
    <section class="header-app">
    <div class="header-container main-layout flex space-between">
    <router-link class="logo" to="/">App&sus</router-link>
    <nav class="flex header-nav">
    <i @click="menuToggle = !menuToggle" class="fas fa-bars"></i>
    <div v-if="menuToggle" class="apps">
    <div class="apps-icons">
    <router-link to="/" ><i class="fas menu-icon fa-home"></i></router-link>
    <router-link to="/keep"><i class="fas menu-icon fa-sticky-note"></i></router-link>
    <router-link to="/mail"><i class="fas menu-icon fa-envelope"></i></router-link>
    </div>
    <div class="apps-icons">
    <i class="fas menu-icon unactive fa-cart-arrow-down"></i>
    <i class="fas menu-icon unactive fa-compass"></i>
    <i class="fas menu-icon unactive fa-calendar"></i>
    </div>
    <div class="apps-icons">
    <i class="fas menu-icon unactive fa-download"></i>
    <i class="fas menu-icon unactive fa-chart-line"></i>
    <i class="fas menu-icon unactive fa-map-pin"></i>
    </div>
    </div>
    </nav>
    </div>
    </section>
    `,
    data() {
        return {
            menuToggle: false
        }
    }
}