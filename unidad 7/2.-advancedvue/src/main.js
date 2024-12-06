import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/home.vue'     //this component is imported at the beginning, no matter if the user is going to open it or not


/*vue was intended for SPA (Single page applications), those who ask for an HTML just once to the server, loading the future needed content via AJAX. If not using a SPA, the way of avoiding browser asking a full page is by using router*/

const routes = [
    { path: '/', component: Home },
    //lazy-loading, carga perezosa o bajo demanda, loads the component only when it's needed
    {path: '/about', name: 'About', component:() => import('./views/about.vue')},
    {path: '/padre', name: 'Padre', component:() => import('./views/padre.vue')},
    {path: '/listaTareas', name: 'ListaTareas', component:() => import('./views/listaTareas.vue')},
    {path: '/formulario', name: 'formulario', component:() => import('./views/formBinding.vue')},
    {path: '/observador', name: 'observador', component:() => import('./views/watcher.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


createApp(App).use(router).mount('#app')
