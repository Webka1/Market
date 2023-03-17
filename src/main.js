import { createApp } from 'vue'
import router from './router/index.js'
import StarRating from 'vue-star-rating'
import './style.css'
import App from './App.vue'


createApp(App).use(router).component('star-rating', StarRating).mount('#app')
// createApp(App).use(router).mount('#app')
