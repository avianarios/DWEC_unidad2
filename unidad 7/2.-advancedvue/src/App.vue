<script setup>
//by declaring setup we are using composition API instead of options API. Easier coding
import {ref, computed} from 'vue'
//import padre from './components/padre.vue'
//import watcher from './components/watcher.vue'


/*to be used instead of routing component. Intended only for quick and very simple routing capabilities
const routes = {
  '/padre': padre,
  '/listaTareas': listaTareas,
  '/watcher': watcher
}

//changes on location.hash, the part of the URL followed by #, are listened to determine 
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] 
})*/
</script>

<template>
  <section class="flex flex-col">
    <nav>
      <!--`<router-link>` will render an `<a>` tag with the correct `href` attribute-->
      <router-link to="/">Home</router-link> |
      <router-link to="/padre">Padre</router-link> | 
      <router-link to="/listaTareas">Lista de tareas</router-link> | 
      <router-link to="/formulario">Formulario</router-link> |
      <router-link to="/observador">Carga asíncrona</router-link> |
      <router-link to="/about">About</router-link>


    </nav>
    <section class="flex flex-col ">
      <img src="./assets/vue3.png" alt="logo vue">
      <section class="flex w-100 jc-center">
        <article class="flex gap-4 ai-center"></article>

        <!--component matched by the route will render here-->
        <router-view />

        <!--A tag forces the page to be refreshed . To be used only when very simple routing is needed
        <a href="#/padre">Emit, Inject y v-model</a> |
        <a href="#/listaTareas">Lista de tareas (emit)</a> |
        <a href="#/watcher">Observador</a>-->
      </section>
      <article class="flex w-100 jc-center">
  <!--      <component :is="currentView" />  -> to be used instead of routing component-->
      </article>
    </section>
  </section>
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

img{
  max-width: 1000px;
}
</style>
