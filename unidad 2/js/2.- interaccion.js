//shows up a modal window with the message and waits for the user to press ok
alert ("esto es un mensaje");

//shows a message at the console
console.log("esto es un texto");

//shows up a modal window asking the user for confirmation
let respuesta=confirm("¿acepta?"); 

//shows up a modal window asking the user for a value
let numero=prompt("dame un número", "numero");  //esc and cancel returns null, accept returns empty string
console.log (`El número introducido es ${numero}`);

//the following variables are known due to an early import of variables.js at index.html
console.log ( numero1 + cadena );
console.log ( `La suma de ${numero1} y ${numero2} da ${numero1+numero2}` );
console.log ( numero1+numero2 );
console.log( asignaturas[1] );
console.log( persona.nombre )
console.log ( typeof(numero1), typeof(cadena), typeof(asignaturas), typeof(persona), typeof( constante) );
console.log ( 4/"2" );

console.log ("El resultado de hacer la operación numero+cadena es", numero+cadena, `que es de tipo ${typeof(numero+cadena)}` );
console.log (`El resultado de hacer la operación numero+NUMERO es ${numero+NUMERO}, que es de tipo ${typeof(numero+NUMERO)}`);
console.log ("El resultado de hacer la operación numero+cadena es", numero+cadena, `que es de tipo ${typeof(numero+cadena)}` );