const MAX_PRIME = 100000;
const primos = document.getElementById("primos");
const textoPromesaSimple=document.getElementById("textoPromesaSimple");
const textoAsíncrono=document.getElementById("textoAsíncrono");
const textoFuncionAsíncrona=document.getElementById("textoFuncionAsíncrona");
const textoPromesas=document.getElementById("textoEncadenandoPromesas");
const textoCombinandoAlgunasPromesas=document.getElementById("textoCombinandoAlgunasPromesas");
const textoCombinandoTodasPromesas=document.getElementById("textoCombinandoTodasPromesas");
const textoAsyncFunctions=document.getElementById("textoAsyncFunctions");

const random = (max) => Math.floor(Math.random() * max);

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
        return false;
        }
    }
    return n > 1;
}


function generatePrimes(primos) {
    const primes = [];
    while (primes.length < primos) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)) {
        primes.push(candidate);
        }
    }
    return primes;
}

//Defining promises that will be used further away
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);
//fetch returns a promise object of the built-in Response class as soon as the server responds with headers, but no body has still been transfered. In order to get the body, an additional method is required
/*  response.text()
    response.json()
    response.formData()
    response.blob()
    response.arrayBuffer()
*/

document.addEventListener("click", (evento)=>{
    switch (evento.target.id){
        case "synchronous":
            const primes = generatePrimes(primos.value);
            const salidaSíncrona = document.getElementById("textoSíncrono");
            salidaSíncrona.textContent = `¡Finalizado! se han generado ${primos.value} números primos`;
            salidaSíncrona.classList.remove("dp_none");
            break;
        case "simplePromise":
            textoPromesaSimple.innerHTML=fetchPromise1+"--> Promise is created to fetch file";
            fetchPromise1.then((response) => {
                console.log(response);
                textoPromesaSimple.innerHTML=`Received response: ${response.status}`;
            });
                
            textoPromesaSimple.innerHTML+=`Started request`;
            break;            
        case "asynchronousCode":
            (async () => {
                let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
                let response = await fetch(url);
/*                let resultados = await response.json(); // leer respuesta del cuerpo y devolver como JSON
                for (let resultado of resultados){
                    textoAsíncrono.innerHTML+=`Author: ${resultado.author.login}, commit: ${resultado.commit.message}<br>`;
                }*/

                let resultados = await response.text(); // leer respuesta del cuerpo y devolver como texto
                textoAsíncrono.innerHTML=`${resultados}`;
            })();   //by using this last parenthesis, the anonymous function is called
//            alert(commits[0].author.login);
            break;
        case "getImage":
            (async () => {
                let response = await fetch('https://cataas.com/cat');
                
                let blob = await response.blob(); // download as Blob object
                
                let img = document.createElement('img');
                img.style='max-width:100%';

                document.getElementById("getImage").insertAdjacentElement("afterend", img);
               
                // mostrar
                img.src = URL.createObjectURL(blob);
                
                setTimeout(() => { // ocultar luego de tres segundos
                  img.remove();
                  URL.revokeObjectURL(img.src);
                }, 5000);
            })()
            break;

        case "asyncFunctions":
//            fetchProducts().then((data) => console.log(data[0].name));
//            fetchProducts().then((data) => textoAsyncFunctions.textContent=data[0].name);
            fetchProducts().then((data) => {
                data.forEach((objeto)=>{
                    textoFuncionAsíncrona.innerHTML+=`<br>${objeto.name}, ${objeto.type}`
                });
            });
            break;
        case "chainingPromises":
            fetchPromise1
                .then((response) => {
                    if (!response.ok){      //HTTP-status=200-299
                        throw new Error(`HTTP error: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data)=>{     //json method is also asynchronous, so a promise is needed
                    data.forEach((objeto)=>{
                        textoPromesas.innerHTML+=`<br>${objeto.name}, ${objeto.type}`
                    });
                })
                .catch((error)=>{       //chained at the end, it's called when any promise fails
                    console.error(`Error: ${error}`)
                });
            break;
        case "combiningAllPromises":
            Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
                .then((responses) => {
                  for (const response of responses) {
                    console.log(`${response.url}: ${response.status}`);
                    textoCombinandoTodasPromesas.innerHTML+=`${response.url}: ${response.status}<br>`;
                  }
                })
                .catch((error) => {
                    console.error(`Failed to fetch: ${error}`);
                });
            break;
        case "combiningAnyPromises":
            Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
                .then((response) => {
                    console.log(`${response.url}: ${response.status}`);
                    textoCombinandoAlgunasPromesas.innerHTML+=`${response.url}: ${response.status}<br>`;
                })
                .catch((error) => {
                    console.error(`Failed to fetch: ${error}`);
                });
    }
});


//asynchronous function
async function fetchProducts() {
    try {
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
}
