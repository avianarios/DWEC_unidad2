///////////////
////cookies////
///////////////

//create cookie
//document.cookie
for (let formulario of document.querySelectorAll("form")){
    formulario.addEventListener("submit", (evento)=>{
        evento.preventDefault();
    });
}
//let radiobuttons=document.getElementById("SameSite");

//document.forms[0].addEventListener("change", (evento)=>{
let formulario_galletita=document.getElementById("formulario-galletita");
let estado=formulario_galletita.elements["secure"].checked;

document.getElementById("cookies").addEventListener("change", (evento)=>{
    switch (evento.target.id){
        case "secure":
            estado=evento.target.checked;
            break;
        case "SameSite":
            if (evento.target.value=="None"){
                formulario_galletita.elements["secure"].checked=true;
                document.getElementById("secure").disabled=true;
            }else{
                formulario_galletita.elements["secure"].checked=estado;
                document.getElementById("secure").disabled=false;
            }
            break;
    }

});


document.getElementById("cookies").addEventListener("click", (evento)=>{
    switch (evento.target.id){
        case "create_cookie":
                //first field is special: it is mandatory and the user can choose the name
                let campo_nombre=document.querySelectorAll("input[name*='nombre']");
                let galletita=`${campo_nombre[0].value}=${campo_nombre[1].value};`;

                //rest of the fields are optional
                for (campo of document.querySelectorAll("input:not([name*='nombre'])")){
                    switch (campo.type){
                        case "radio":
                            if (campo.checked){
                                galletita+=`${campo.name}=${campo.value};`;
                            }
                            break;
                        case "checkbox":
                            if (campo.checked)
                                galletita+=`${campo.name};`;
                            break;
                        default:
                            if (campo.value!=""){
                                if (campo.name=="expires"){
                                    campo.value=new Date (campo.value);
                                }
                                galletita+=`${campo.name}=${campo.value};`;
                            }
                            if ((campo.name=="secure") && (campo.checked)){
                                galletita+="secure;";
                            }
                    }
                }
                document.cookie=galletita;
            break;
        case "show_cookies":
            let texto_propiedades=document.getElementById("texto_propiedades");
            texto_propiedades.innerHTML=`${document.cookie}`;
            texto_propiedades.classList.remove("dp_none");
            break;
    }
});



///////////////////////////////////////
////localStorage and sessionStorage////
///////////////////////////////////////

//creating localstorage
document.getElementById("storage").addEventListener("click", (evento)=>{
    evento.preventDefault();
    let formulario_escritura_almacenamiento=document.getElementById("formulario_escritura_almacenamiento");
    let nombre=formulario_escritura_almacenamiento.elements[1].value;   //starting at 1 due to fieldset counting as a form element
    let valor=formulario_escritura_almacenamiento.elements[2].value
    let objeto_respuestas={};
    switch (evento.target.id){
        case "create_localstorage":
            if ((nombre!="") && (valor!=""))
                localStorage.setItem(nombre,valor);  
                //it also works localStorage.nombre=valor or localStorage['nombre']=valor, but it's not recommended
            break;
        case "create_sessionstorage":
            if ((nombre!="") && (valor!=""))
                sessionStorage.setItem(nombre,valor);  
            break;
        case "create_complex_localstorage":
            rellenaObjeto(document.querySelectorAll("#formulario_escritura_almacenamiento [type='text']"), objeto_respuestas);
            localStorage.setItem("objeto_respuestas", JSON.stringify(objeto_respuestas));
            break;
        case "create_complex_sessionstorage":
            rellenaObjeto(document.querySelectorAll("#formulario_escritura_almacenamiento [type='text']"), objeto_respuestas);
            sessionStorage.setItem("objeto_respuestas", JSON.stringify(objeto_respuestas));
            break;
        case "show_localstorage":
            muestraInformacion(localStorage);
            /*In order to work with complex objects:
                let objeto=JSON.parse(localStorage.getItem("myObject"));*/
            break;
        case "show_sessionstorage":
            muestraInformacion(sessionStorage);
            break;
        case "remove_one_localstorage":
            localStorage.removeItem(document.querySelector("#formulario_eliminacion_storage [type=text]").value);
            break;
        case "remove_one_sessionstorage":
            sessionStorage.removeItem(document.querySelector("#formulario_eliminacion_storage [type=text]").value);
            break;
        case "remove_one_sessionstorage":
            localStorage.clear();
            break;
        case "remove_one_sessionstorage":
            sessionStorage.clear();
            break;
    }

    function rellenaObjeto(elementos, objeto){
        for (let i=0; i<elementos.length; i+=2){
            if ((elementos[i].value!="") && (elementos[i+1].value!=""))
                objeto[elementos[i].value]=elementos[i+1].value;
        }
    }

    function muestraInformacion(cual){
        let texto_propiedades2=document.getElementById("texto_propiedades2");
        texto_propiedades2.classList.remove("dp_none");
        texto_propiedades2.innerHTML="";
        for (let llave of Object.keys(cual)){
            texto_propiedades2.innerHTML+=`${llave}:${cual.getItem(llave)}<br>`;
        }
        document.documentElement.scrollTo(0, document.documentElement.scrollHeight);
    }
});
