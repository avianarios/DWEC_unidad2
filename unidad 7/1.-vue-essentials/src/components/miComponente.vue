<script setup>
    //text interpolation
    const nombre="pepito";
    defineProps({
        msg: {
            type: String,
            required: true
        },
        msg2:{
            type: String,
            required: true
        }
    });
    const texto="<strong>Eres un tipo importante</strong>";
    const dynamicClass="ClaseDinamica";
    const isButtonDisabled=true;

    const objeto={
        color:"blue",
        id:"pepe",
    };

    const numero=7;


    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    
    const unaURLdinamica="https://vuejs.org/";


    const matrizColores=["blue", "red", "green"];
    const disponible=true;
    const contratar=true;
    const habilidades=true;
    const matrizHabilidades=["vue", "JavaScript", "JQuery", "PHP"];
    const objetoEmpleado={
        nombre: "pepe",
        id:3,
        edad: "25",
        puesto: "encargado",
        situacion: "activo"
    };

    const matrizHabilidadesDiseño=["CSS", "SASS", "Tailwindcss"];
    let masHabilidades=false;

    const matrizEmpleados=[
        {
            nombre: "Felipe",
            id:1,
            edad: "35",
            puesto: "programador",
            situacion: "activo"
        },{
            nombre: "Paco",
            id:2,
            edad: "65",
            puesto: "jefe",
            situacion: "jubilado"
        }
    ];

    ////Reactivity////
    
    let contador=0;
    const incrementaContador=()=>{
        contador++;
        console.log(contador);
    };

    //Now, contadorReactivo a reactive variable (it's really an object)
    import {ref} from 'vue';
    let contadorReactivo=ref(0);    
    const incrementaContadorReactivo=()=>{
        contadorReactivo.value++;   //remember, now it's an object
    };

    const disminuirContadorReactivo=()=>{
        contadorReactivo.value--;   //remember, now it's an object
    };

   
    ////Computed properties////
    //allow getting out logic from templates
    //import {vue, computed} from 'vue';
    import {computed} from 'vue';

    //it could work as a method instead as a computed property by removing "computed" and calling calculaClase() at the reactive component, but it is recommended doing it this way as the property is cached not to be calculated again until the reactive variable make change inevitable
    const calculaClase= computed(()=>{
        if (contadorReactivo.value>0){
            return "textoVerde";
        }else{
            if (contadorReactivo.value<0){
                return "textoRojo";
            }else
                return "textoAzul";  //class name
        }
    });

    const estadoContador=computed(()=>{
        return contadorReactivo.value>0;
    });

    const usuarioJubilado=computed(()=>{
        matrizEmpleados[0].situacion=="jubilado" ? "si" : "no";
    });

    //Conditional rendering//
    const mostrar=true;


    //List rendering//
    import {matrizURLS} from "../datos.js";

    ////events////
    const manejadorEnvio=()=>{
        console.log ("formulario enviado");
    }

    let mensajeEvento=ref("");
    const alPinchar= (evento) =>{
        mensajeEvento.value+="event captured at "+evento.currentTarget.tagName+" of type:"+evento.type+" Button: "+evento.which+"<br>";
    };

    const alTeclear = (evento) =>{
        mensajeEvento.value=evento.type+":"+evento.key+" ";
    };



    //Class and style bindings
    //if not defined as reactive variables, when modified, changes won't be shown until full page is refreshed
    const activo=ref(true);
    const error = ref(true)
    const cambiarError=()=>{
        error.value=!error.value;
    }
    const cambiarActivo=()=>{
        activo.value=!activo.value;
    }


    //reactive takes an object and returns a reactive version of it
    import{reactive} from 'vue';
    const classObject = reactive({
        bgLightCoral: false,
        redondeado: false
    });

    const cambiarDosClases=()=>{
        classObject.bgLightCoral=!classObject.bgLightCoral;
        classObject.redondeado=!classObject.redondeado;
    };



    //Integrating TailwindCSS
    //uncomment import './assets/index.css' at main.js
    /*const objetoBoton=reactive({
        bgblue400: true,
        rounded: true
    });

    const estilosTailwind= computed(()=>({
        'bg-blue-400': objetoBoton.bgblue400,

    }));*/
    
    //some classes to build an array
    const claseBgLightCoral="bgLightCoral";
    const claseBgLightGreen="bgLightGreen";
    const claseRedondeada="redondeado";
    const textoRojo="textoRojo";

    const clases=["bgLightGreen", "redondeado"];

    const estilosComputados = computed(() => ({
        bgLightBlue: activo.value && !error.value,
//        'text-danger': error.value && error.value.type === 'fatal'
        'text-danger': error.value 
    }));

    const fontSize=ref(30);
    const colorAzul="blue";
    const objetoEstilos={
        color: "blue",
        fontSize: "30px"
    }


  
/*    const imagenPublic="unaimagen.jpg";
    import imagenAssets from  "../assets/unaimagen.jpg";*/


</script>


<template>
    <section class="flex flex-col gap-4 p-20 borde">
        <article class="borde">
            <h3>Text interpolation</h3>
            <h1> Hola {{ nombre.toUpperCase() }}</h1>   <!--With JS you've have to select element and replace contentText property value-->


            <!-- Directives v-whatever: -->
            <a :href="unaURLdinamica">Un enlace</a>
            <p :style="`color:${matrizColores[1]}`">{{ msg2 }}</p>  <!--This is the way of using inline styles v-bind: ..... It can be replaced by : -->
            <p v-html="texto" :class="dynamicClass"></p>  <!--This way, HTML tags within "text" are interpreted and Class is dynamically provided-->
            <button :disabled="isButtonDisabled">Dime más...</button>
            <p v-bind="objeto"></p> <!--Several properties can be assigned at same time by using an object containing these properties-->
            

            <!--Expressions can be used within moustaches inside or outside HTML tags-->
            <p>{{  disponible ? ' y ¡estoy disponible!' : ' lo siento, no estoy disponible :(' }}</p>
            <p :id="`elemento-${numero}`">Voy a sumarle uno a 7: {{ numero+1 }}</p>

            <!--Functions can be used within moustaches-->
            <p>Ejemplo de llamada a función que crea cadena aleatoria: {{ makeid(4) }}</p>
        </article>

        <!-- Statements don't work inside moustaches
            An expression is a snippet of code that evaluates to a value. A statement is a snippet of code that performs an action. If, for, let...are statements
           
            <p> {{  if (activo){ return "estoy activo" } }}</p> -> it doesn't work--> 

        <article class="borde">
            <!--contador variable will show its value when html was rendered, but it won't change unless reactivity is allowed. Ref is one of the ways of doing it -->
            <!-- ref library needs to be summoned-->
            <h3>Reactivity</h3>
            <button @click="incrementaContador">Contador no reactivo:{{ contador }}</button>     <!--no reactive variable-->

            <button @click.left="incrementaContadorReactivo" @click.right.prevent="disminuirContadorReactivo" :class="contadorReactivo>0 ? 'positivo' : 'negativo'">Contador reactivo:{{ contadorReactivo }}</button>


        </article>            
        <article class="borde">
            <h3>Computed properties</h3>
            <!--in-template operations are meant for simple operations. Ideal scenario is to keep as much logic out of templates. It makes code easier to read and mantain. That's were computer properties come out.

            computed properties are reactive and are stored at cache so they are executed when values change. functions aren't reactive, so they are executed every time they are called

            The following button is not ideal scenario
            <button @click.left="incrementaContadorReactivo" @click.right.  prevent="disminuirContadorReactivo" :class="contadorReactivo>0 ? 'positivo' : 'negativo'">{{ contadorReactivo }}</button>     -->
            <button @click.left="incrementaContadorReactivo" @click.right.prevent="disminuirContadorReactivo" :class="calculaClase">Contador reactivo:{{ contadorReactivo }}</button>
            <p v-if="estadoContador">El número es positivo</p>  <!--computed property. Recommended-->
            <p v-if="contadorReactivo<0">El número es negativo</p>  <!--expression. Not recommended-->
            <p>{{ usuarioJubilado }}</p>
        </article>

        <article class="borde">
            <h3>Conditional rendering</h3>        
            <p v-if="contratar">Si tiene usted algún problema y me encuentra, quizás pueda contratarme</p>
            <p v-else="!contratar">No acepto contrataciones</p>     <!-- v-else must follow v-if --> <!-- It is also available v-else-if -->
            <template v-if="mostrar">       <!-- v-if can be attached to a template, which is an empty container that won't be rendered to do something on more than one element-->
                <h1>Esto es un título</h1>
                <p>esto es un texto</p>
                <p>esto es otro texto</p>
            </template>
        </article>

        <article class="borde">
            <h3>List rendering</h3>
            <div v-show="habilidades==true">
                <p>Mire, se hacer un montón de cosas</p>
                <ul>
                    <li v-for="(valor,indice) of matrizHabilidades">{{ indice+1 }}:{{ valor }}</li>
                </ul>
            </div>
            <p>y se contar hasta tres:</p>
            <span v-for="n in 3">{{ n }}</span>
            <!--v-for has access to parent scopes-->

            <p>mis datos son:</p>
            <!--key field is recommended in order for vue to maintain a relationship between elements in code and their render in DOM should the former change their position-->
            <ul>
                <li v-for="(valor, nombreCampo) in objetoEmpleado" :key="nombreCampo"> {{ nombreCampo }}:{{ valor }}</li>
            </ul>
            <p>Los empleados activos, además de mi, son...</p>
            <ul>
                <template v-for="empleado in matrizEmpleados" :key="empleado.id">  <!--Templates are not rendered, they are not HTML tags-->
                    <li v-if="(empleado.situacion)=='activo'"> {{ empleado.nombre }}, {{ empleado.edad }}, {{ empleado.puesto }}</li>
                </template>
            </ul>

            <template v-for="web of matrizURLS">
                <a :href="web.URL">{{ web.nombre }}</a>
            </template>
        </article>
        
        <article class="borde">
            <h3>Events</h3>
            <p>There's a click handler defined at parent container too</p>
            <div @click="alPinchar" class="p-20 borde">   <!--event propagation works...-->
            <button @click.left="alPinchar"
                    @click.middle="alPinchar"
                    @click.right.prevent="alPinchar">Click</button>

                <!--event modifiers:
                    .stop -> stop propagation
                    .prevent -> stop doing its natural behaviour
                    .self -> only fire for this element, not children
                    .capture -> allows to capture events targeting another element
                    .once
                    .passive
                -->

                <input type="text" name="texto" placeholder="escribe aquí" @keyup="alTeclear" @keydown.alt.stop="alTeclear">
                <!--Special keys
                    .enter
                    .tab
                    .delete (captures both "Delete" and "Backspace" keys)
                    .esc
                    .space
                    .up
                    .down
                    .left
                    .right
                -->
                <!--https://blog.boot.dev/javascript/vue-key-events/-->
                <button @click.ctrl="alPinchar">click+ctrl</button>
                <button @click.ctrl.alt="alPinchar">click+ctrl+alt</button>
                <p v-html="mensajeEvento"></p>
                <!--<p> {{ mensajeEvento }}</p>-->
            </div>

            <div>
                <form @submit.prevent="manejadorEnvio">
                    <label>Dime algo</label>
                    <input type="text" name="comentarios">
                    <button>enviar</button>
                </form>
            </div>
        </article>

        <article class="borde">
            <h3>Class and style bindings</h3>
            <div class="flex flex-col">
                <div>
                    <button @click="cambiarError">Cambiar error</button>
                    <button @click="cambiarActivo">Cambiar activo</button>
                    <p>error={{ error }}</p>
                    <p>activo={{ activo }}</p>
                </div>
                <div>
                    <p>binding classes</p>
                    <span :class="[{ bgLightBlue:activo },  claseRedondeada, textoRojo]">Array</span>
                    <span :class="clases">Array or classes</span>
                    <span :class="estilosComputados">Computed</span>
                    <button @click="cambiarDosClases" :class="classObject">Object</button>
                </div>
            </div>
            <!--<button :class="estilosTailwind">Estilos tailwind</button>
            <div :class="{ 'bg-blue-500': someCondition, 'bg-green-500': anotherCondition }"></div>
            -->

            <p :style="{ color: colorAzul, 'font-size': fontSize + 'px' }">{{ msg }}</p> <!--Camel case is recommended. Kebab case is supported but needs simple cuotes-->
            <p :style="objetoEstilos">{{ msg }}</p> <!--Camel case is recommended. Kebab case is supported but needs simple cuotes-->
        </article>
<!--        <p v-for="(color,indice) in matrizColores" :key="indice" >{{ indice }} {{ color }}</p> Key must be provided so vue can locate the node. It must be a unique value, so index is not a good idea, as it would repeat next time we have an array-->


        <!--Images-->
        <!--Images can be taken from public (no need to specify path nor to import) and from assets (you need to specify path and to import)
        <img :src="imagenPublic" alt="una imagen" />
        <img :src="imagenAssets" alt="una imagen" />-->




    </section>



</template>
<!-- 
    <style lang="scss" scoped> -> Allows using scss/sass and limit its scope to the current file. Needs npm install sass
-->
<style>
    .borde{
        border:1px solid lightgrey;
    }

    .p-20{
        padding: 20px;
    }

    .textoVerde{
        color:green;
    }

    .textoRojo{
        color:red;
    }

    .textoAzul{
        color: blue;
    }

    .bgLightCoral{
        background-color: lightcoral;
    }

    .bgLightBlue{
        background-color: lightblue;
    }

    .bgLightGreen{
        background-color: lightgreen;
    }

    .text-danger{
        color: red;
    }

    .redondeado{
        border-radius: 15px;
    }

    .flex{
        display: flex;
    }

    .flex-col{
        flex-direction: column;
    }

    span{
        margin: 5px;
        padding: 5px;
    }

    .borde{
        border: 2px solid lightgray;
    }

    .gap-4{
        gap:20px;
    }
</style>