// principal.js
import { add, multiply } from './1.-mates.js';
import { getCurrentDate, getCurrentTime } from './1.-fecha.js';
import { createParagraph, createHeading } from './1.-dom.js';

// Operaciones con números
const sum = add(5, 10);
const product = multiply(4, 3);

// Obtener fecha y hora actuales
const currentDate = getCurrentDate();
const currentTime = getCurrentTime();

// Manipular el DOM para mostrar resultados
createHeading(2, 'Resultados:');
createParagraph(`Suma: ${sum}`);
createParagraph(`Producto: ${product}`);
createParagraph(`Fecha actual: ${currentDate}`);
createParagraph(`Hora actual: ${currentTime}`);


//Dynamic loading
document.getElementById('cargarCadenas').addEventListener('click', () => {
    // Importar el módulo cuando se haga clic en el botón
    import('./1.-cadenas.js')
        .then((module) => {
            // Usar las funciones del módulo importado
            const str = "Hola Mundo";

            const upperCaseStr = module.toUpperCase(str);
            const lowerCaseStr = module.toLowerCase(str);
            const contains = module.containsSubstring(str, 'Mundo');
            const trimmedStr = module.trimString('   Hola Mundo   ');
            const replacedStr = module.replaceWord(str, 'Mundo', 'Universo');

            // Mostrar los resultados
            const resultados = document.getElementById('resultados');
            resultados.innerHTML = `
                <p>Texto original: ${str}</p>
                <p>Texto en mayúsculas: ${upperCaseStr}</p>
                <p>Texto en minúsculas: ${lowerCaseStr}</p>
                <p>¿Contiene "Mundo"? ${contains}</p>
                <p>Texto sin espacios: ${trimmedStr}</p>
                <p>Texto reemplazado: ${replacedStr}</p>
            `;
        })
        .catch((error) => {
            console.error('Error al cargar el módulo:', error);
        });
});


//another way of dynamic loading
async function cargarScript(src) {
    const response = await fetch(src);
    const scriptContent = await response.text();
    const script = document.createElement('script');
    script.textContent = scriptContent;
    document.head.appendChild(script);
    console.log('jQuery ha sido cargado con éxito');
    // Probar que jQuery funciona
    $('body').css('background-color', 'lightgreen');
}

document.getElementById('cargarJQuery').onclick = async function() {
    await cargarScript('https://code.jquery.com/jquery-3.6.0.min.js');
};
