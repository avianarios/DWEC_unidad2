////////////////
////creation////
////////////////
/*key concepts:
  -UTC is the world standard time, with no time zone differences. Is based on time at the Greenwich Meridian (0° longitude)
  -How JavaScript stores dates internally: in milliseconds from 1/1/1970 00:00:00 UTC
  -How JavaScript represents data when outputting:
    -Text representation: short, long, extended depending on the method
    -Time representation: JavaScript can display the time in UTC or the local time zone. When displaying the time in local time, JavaScript converts from UTC to the local time zone.
*/

//Example 1: creating a new date 
const ahora=new Date();   //current date
const en1970=new Date(0);   //number of miliseconds starting at 01/01/1970 00:00:00 UTC. Can be negative for a date before 1970

//This creates a date for 1 April 1939 at midnight (00:00:00) in your local time zone but it represents it as miliseconds from 1/1/1970 00:00:00 UTC
//months start at 0
const finGuerraCivil = new Date(1939, 3, 1);    //CAUTION!, year, month, day. The first month is 0, not 1
const skynetConciencia=new Date(2024, 7, 29, 2, 14, 0, 0); // (year, month (starting at 0), date, hours, minutes, seconds, ms)
const caidaMuroBerlin=new Date("1989-11-09");
const espanyaCampeona=Date.UTC(2010,6,11,0,30);   //static method from Date Object that creates a date in UTC time

console.log (`${ahora}\n${en1970}\n${finGuerraCivil}\n${skynetConciencia}\n${caidaMuroBerlin}\n`,caidaMuroBerlin);

/*first caidaMuroBerlin output: JavaScript engine calls toString method that converts to human readable format
second caidaMuroBerlin ouput: JavaScript engine outputs default format (ISO 8601 format): YYYY-MM-DDTHH:mm:ss.sssZ, 2010-07-10T22:00:00.000Z
    -T-> Separator between Date and time
    -Z-> Indicates that the time is in UTC Format (.)
*/


////////////////////
////Showing date////
////////////////////
//When you create a date in JavaScript, it is stored internally in UTC (Coordinated Universal Time). 
//When you print it out, it may appear in UTC depending on the environment, but it is usually converted to local time automatically.
const espanyaCampeona=new Date (2010,6,11);    
console.log(espanyaCampeona);    //node.js shows UTC time. As Spain is UTC+2, the time is set to 2 hours off, 22:00

//Example 1: converts to a human readable format. Local time zone
const espanyaCampeona=new Date (2010,6,11);
console.log(espanyaCampeona.toString()); 

//Example 2: converts to ISO 8601. UTC time zone
//ISO 8601 is an international time representation format. It uses UTC
const espanyaCampeona=new Date (2010,6,11);    
console.log(espanyaCampeona.toISOString());    //2010-07-10T22:00:00.000Z

//Example 3: Converting to UTC
const espanyaCampeona=new Date (2010,6,11);    
console.log(espanyaCampeona.toUTCString());

//Example 4: converting to short local format, only date. Local time zone, but UTC can be shown as well
const espanyaCampeona=new Date (2010,6,11);    
console.log(espanyaCampeona.toLocaleDateString('es-ES'));  // "11/7/2010"

//Example 5: converting to local format with date and time.  Local time zone, but UTC can be shown as well
const espanyaCampeona=new Date (2010,6,11,0,30);    
console.log(espanyaCampeona.toLocaleString('es-ES'));  //'es-ES' could be removed
console.log(espanyaCampeona.toLocaleString('es-ES', { timeZone: 'UTC' }));  // Muestra la fecha en UTC

//Example 6: converting from ms to date
const espanyaCampeona=new Date (2010,6,11);    
console.log(espanyaCampeona.getTime());

//Example 7: converting short format
const espanyaCampeona=new Date (2010,6,11);    
console.log(espanyaCampeona.toDateString()); 

//Example 8: using Intl.DateTimeFormat to get a date with the right representantion. Original date object is not changed. 
//every time the right format is needed, format has to be utilized

/*Intl Object has to be used to convert a date to spanish format. It is global object allowing adaptation of web applications to different languages, cultures and regional formats.
Intl has some classes:
    -DateTimeFormat
    -NumberFormat
    -Collator
    -PluralRules
    -RelativeTimeFormat

In order to get a correctly formed date:
    -an instance of Intl.DateTimeFormat has to be created 
    -right options need to be set
    -format method has to be invoked
*/

const finGuerraCivil = new Date(1939, 3, 1);    //CAUTION!, year, month, day. The first month is 0, not 1
const skynetConciencia=new Date(2024, 7, 29, 2, 14, 0, 0); // (year, month (starting at 0), date, hours, minutes, seconds, ms)
const caidaMuroBerlin=new Date("1989-11-09");
const espanyaCampeona=new Date (2010,6,11);    

// Creating the conversions options. Spanish and long month
const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
const formatoEspañol = new Intl.DateTimeFormat('es-ES', opciones);

//applying format
const aux=formatoEspañol.format(finGuerraCivil);
console.log (aux, typeof aux, finGuerraCivil);  //it returns a primitive value string

console.log(`${formatoEspañol.format(finGuerraCivil)}\n${formatoEspañol.format(skynetConciencia)}\n${formatoEspañol.format(caidaMuroBerlin)}\n${formatoEspañol.format(espanyaCampeona)}`);        //applying format


/*possible options:
    weekday: "narrow", "short", "long"
    year: "numeric", "2-digit"
    month: "numeric", "2-digit", "short", "long", "narrow"
    day: "numeric", "2-digit"
    hour, minute and second: "numeric", "2-digit"
    timeZoneName: "short", "long"
    hour12: true, false*/

//Example 9: More options
const ahora = new Date();

// Opciones avanzadas para mostrar la fecha y hora
const opciones = {
  weekday: 'long',  // Día de la semana en formato largo
  year: 'numeric',  // Año en formato numérico
  month: 'long',    // Mes en formato largo
  day: 'numeric',   // Día en formato numérico
  hour: '2-digit',  // Hora en formato de dos dígitos
  minute: '2-digit',// Minutos en formato de dos dígitos
  second: '2-digit',// Segundos en formato de dos dígitos
  timeZoneName: 'short', // Zona horaria abreviada
  hour12: true      // Formato de 12 horas (AM/PM)
};

// Formatear la fecha en español con todas las opciones
const formatoEspañol = new Intl.DateTimeFormat('es-ES', opciones);
console.log(formatoEspañol.format(ahora));


///////////////////////////
////getting information////
///////////////////////////
//Example 1: getting date information
const ahora=new Date();
console.log (
    ahora.getFullYear(),
    ahora.getMonth(),
    ahora.getDay(),
    ahora.getHours(),
    ahora.getMinutes(),
    ahora.getSeconds(),
    ahora.getDate() //gets day of month. Not really intuitive
);


////////////////////
////setting date////
////////////////////
//Date object is not inmutable
//Example 1: setting date information. They all change original date object
const ahora=new Date();
console.log(ahora);
ahora.setFullYear(2022);
ahora.setMonth(ahora.getMonth()-2);
ahora.setDate(-1);  //can use negative numbers meaning one day before the last one of the previous month
ahora.setMinutes(68);   //adds minutes to current hour, beginning at 0
ahora.setMinutes(-10);  //returns ten minutes to the current hour. if the current hour is 21:45, returns 20:50
console.log(ahora);


///////////////////////
////comparing dates////
///////////////////////
//Example 1: by using getTime
//getTime returns miliseconds from 01-01-1970
let fecha1 = new Date('2024-01-01');
let fecha2 = new Date('2024-01-05');

if (fecha1.getTime() < fecha2.getTime()) {
  console.log("fecha1 es anterior a fecha2");
} else {
  console.log("fecha1 es posterior o igual a fecha2");
}


//Example 2: comparing by using mathematical operators
let fecha1=new Date('2024-01-01');
let fecha2=new Date('2024-01-05');
let fecha3=new Date('2024-01-01');

console.log(fecha1 < fecha2);   //< and > work. JavaScript converts each date to miliseconds (using getTime)
console.log(fecha1 > fecha2);  

console.log(fecha1 == fecha3);  //it doesn't work. It is comparing references, not values
console.log(fecha1.getTime()==fecha3.getTime());


//Example 3: comparing by substraction
let fechaActual=new Date();
let hace5anyos=new Date(fechaActual);
hace5anyos.setFullYear(fechaActual.getFullYear() - 5); //it substract 5 years, modifying hace5anyos
console.log (fechaActual-hace5anyos>0);     //fechaActual is a ISO 8601 Date, but JavaScript converts it to ms since 1/1/70 to substract the other date

