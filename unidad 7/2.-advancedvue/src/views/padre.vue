<script setup>
    import hijo1 from '../components/hijo1.vue'
    import hijo2 from '../components/hijo2.vue'
    import hijo3 from '../components/hijo3.vue'
    import { ref, provide } from 'vue'

    const nombre=ref("procopio")
    const edad=ref(35);
    const titulo=ref("Más sobre mí")


    //for using with hijo1
    const cambiarValores=(valor1,valor2)=>{
        nombre.value=valor1;
        edad.value=valor2;
    }

    //for using with hijo2
    const pais=ref("España");
    provide('miPais', pais);

</script>

<template>
    <article>
        <h2>{{ titulo }}</h2>
        <p>Hola, soy {{ nombre }}, tengo {{ edad }} años y vivo en {{  pais  }}</p>
        <hijo1 :nombre="nombre" :edad="edad" @cambiar="cambiarValores"/>
        <hijo2 :nombre="nombre" :edad="edad" @cambiar="cambiarValores"/>

        <!--v-model creates two-way data binding between parent and child component v-model="reactiveVar"
        it admits parameters specified after : -->
         <hijo3 v-model:argTitulo="titulo"/>
    </article>

</template>