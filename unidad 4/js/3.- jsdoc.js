/**
 *  función que invierte una variable booleada pasada por argumento
 *
 * @param {*} bool- El booleano que va a ser invertido
 * @return {*} bool - El booleano invertido
 */

function invierte(bool) {
    return (!bool);
}
console.log (invierte (true));


/**
 * Función que, simplemente, saluda
 *
 * @param {*} mensaje - Mensaje que se mostrará por pantalla
 * @return {*} Devuelve verdadero siempre
 */
function saluda (mensaje){
    console.log ("hola "+mensaje)
    return true;
}