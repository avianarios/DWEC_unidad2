<script setup>
    import { ref,inject } from 'vue';
    const pais=inject('miPais');

    const modificar=()=>{
        pais.value=nuevoPais.value;
    }

    const nuevoPais=ref("");
</script>

<template>
    <div>
        <h2>Este es el hijo 2</h2>
        <p>Paso de valores entre padre e hijo mediante inject</p>
        <p>Tu país actual es: {{  pais }}</p>

        <select v-model="nuevoPais">
        <option disabled value="">Seleccione uno</option>
            <option>Francia</option>
            <option>Italia</option>
            <option>Portugal</option>
        </select>

        <button @click="modificar">Cambiar</button>
    </div>

</template>