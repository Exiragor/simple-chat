import 'bootstrap';
import Vue from 'vue'
import App from './App.vue'
import router from './router/router';

// some code
(() => {
    console.log("test");
})();

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
