import 'bootstrap';
import Vue from 'vue'
import App from './App.vue'

// some code
(() => {
    console.log("test");
})();

new Vue({
  el: '#app',
  render: h => h(App)
})
