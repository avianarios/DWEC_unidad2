<script setup>
/*defineModel returns a ref. It can be accessed and mutated like any other ref, except that it acts as a two-way binding between a parent value and a local one:

  Its .value is synced with the value bound by the parent v-model; When it is mutated by the child, it causes the parent bound value to be updated as well.*/
//const titulo=defineModel('') -> no arguments
  const titulo=defineModel('argTitulo')

</script>

<template>
  <p>Ejemplo de paso de valores entre padre e hijo mediante v-model</p>
  <span>Título</span> <input v-model="titulo" placeholder="titulo">
</template>