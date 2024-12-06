<script setup>
    import { ref } from 'vue';
    defineProps(['nombre','edad']);
    const emit=defineEmits(['cambiar']);
    
    const cambiar=()=>{
        emit('cambiar', nuevoNombre.value, nuevaEdad.value)
    }

    const nuevoNombre=ref('');
    const nuevaEdad=ref('');

</script>

<template>
    <div>
<!--        <h1>Este es el hijo</h1>
        <p>Ejemplo de paso de valores entre padre e hijo mediante props</p>
        <p>El nombre es {{ nombre }} y la edad {{ edad }}</p>-->
        <p>Cambio de datos personales (mediante props, hijo1)</p>
        <input v-model="nuevoNombre" placeholder="nuevo nombre">
        <input v-model="nuevaEdad" placeholder="nueva edad">


        <button @click="cambiar">Cambiar valores</button>
    </div>
</template>