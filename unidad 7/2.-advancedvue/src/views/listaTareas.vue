<script setup>
import { ref } from 'vue'
import tarea from '../components/eliminaTarea.vue'
  
const nuevoTextoTarea = ref('')
const tareas = ref([
  {
    id: 1,
    title: 'Lavar platos',
    description: 'Se trata de dejar los platos como los chorros del oro. Paso 1: coger un estropajo y echarle lavavajillas. Paso 2: enjabonar el plato. Paso 3: abrir el grifo y enjuagar. Paso 4: Cerrar el grifo. Repetir' 
  },
  {
    id: 2,
    title: 'Preparar comida'
    description: 'Se trata de llenar el estómago para engañar a la muerte un día más. Paso 1: prepara ingredientes. Paso 2: cocínalos. Paso 3: Sirve. Paso 4: come' 
  },
  {
    id: 3,
    title: 'Limpiar cocina'
    description: 'Se trata de dejar la cocina reluciente y que las ratas no te muerdan los dedos de los pies. Paso 1: limpiar encimera. Paso 2: limpiar platos. Paso 3: limpiar suelo.' 
  }
])

let proximoIDTarea = tareas.value.length;

function nuevaTarea() {
  tareas.value.push({
    id: proximoIDTarea++,
    title: nuevoTextoTarea.value
  })
  nuevoTextoTarea.value = ''
}

</script>

<template>
	<form v-on:submit.prevent="nuevaTarea">
    <label for="nueva-tarea">Añadir tarea</label>
    <!--v-model creates two-way data binding between input element and nuevoTextoTarea variable allowing to store its value-->
    <input
      v-model="nuevoTextoTarea"
      id="nueva-tarea"
      placeholder="nueva tarea"
    />
    <button>Añadir</button>
  </form>
  <ul>
    <!--remove is an event emitted by "tarea" component for the parent to capture it -->
    <tarea
      v-for="(tarea, index) in tareas"
      :key="tarea.id"
      :title="tarea.title"
      @remove="tareas.splice(index, 1)"
    ></tarea>
  </ul>


</template>