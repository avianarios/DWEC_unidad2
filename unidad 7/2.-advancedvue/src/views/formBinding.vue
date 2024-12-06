<script setup>
    import { ref } from 'vue'

//form input binding
    const mensaje=ref("");
    const checked=ref();
    const checkedNames=ref([]);
    const picked=ref();
    const selected=ref();

    const saludo="hola";

   
</script>

<template>
            <article class="borde">
            <h2>Form input binding</h2>
                <!--v-model can be used on a component to implement a two-way binding.-->

                <!--Not recommended
                    <input
                        :value="mensaje"
                        @input="event => mensaje = event.target.value">
                        <p>Message is: {{ mensaje }}</p>
                -->
            <form>
                <input v-model="mensaje" placeholder="edit me" />
                <p>Message is: {{ mensaje }}</p>
                <input type="checkbox" id="checkbox" v-model="checked" />
                <label for="checkbox">{{ checked }}</label>
                <div>Checked names: {{ checkedNames }}</div>

                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                <label for="jack">Jack</label>

                <input type="checkbox" id="john" value="John" v-model="checkedNames">
                <label for="john">John</label>

                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">Mike</label>

                <div>Picked: {{ picked }}</div>

                <input type="radio" id="one" value="One" v-model="picked" />
                <label for="one">One</label>

                <input type="radio" id="two" value="Two" v-model="picked" />
                <label for="two">Two</label>


                <div>Selected: {{ selected }}</div>

                <select v-model="selected">
                <option disabled value="">Please select one</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </form>
        </article>
</template>