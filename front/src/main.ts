import './assets/main.scss'

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from '@/components/HomePage.vue';
import GererRapports from '@/components/GererRapports.vue';
import CreerRapport from '@/components/CreerRapport.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/GererRapports', component: GererRapports },
    { path: '/CreerRapport', component: CreerRapport }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});






const app = createApp(App);
app.use(router);
app.mount('#app');
