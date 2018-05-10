import 'bootstrap';
import Vue from 'vue'
import router from './router/router';
import store from  './store/store';
import App from './App.vue'

// some code
(() => {
    console.log("test");
})();


//init general component of Vue
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
