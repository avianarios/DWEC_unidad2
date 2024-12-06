<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import miComponente from './components/miComponente.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!--Helloworld is a component, imported at script section-->
      <HelloWorld msg="¡Bien!"/>
    </div>
  </header>

  <section>
    <main>
      <TheWelcome />
    </main>

  </section>
  
  <footer>
    <!--Messages can be sent to a component by defining the variables at defineProps at script setup section-->
    <miComponente msg="¡Oh, gran personaje!" msg2="Tus hazañas son de sobra conocidas"/>
  </footer>

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
</style>
