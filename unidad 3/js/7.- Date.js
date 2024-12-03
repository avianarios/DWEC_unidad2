/*key concepts:
  -How to reference time:
    -GMT (Greenwich Mean Time) is a standard time zone based on the mean time of the Greenwich Mean Time (0° longitude), which passes through the Royal Greenwich Observatory in London, United Kingdom. This Time zone has historically been used as the basis for measuring time around the world. It is a reference for other time zones: The other time zones are defined in relation to GMT, such as GMT+1 (one hour ahead), GMT-3 (three hours behind), etc.

    Mean solar time: It is an idealized and constant representation of solar time. It is based on the assumption that the Sun moves at a constant speed throughout the year, as if the Earth's orbit were perfectly circular.

    -UTC (Coordinated Universal Time): This is an international time system that is not based on solar time, but on a combination of atomic clocks and astronomical observations. UTC is more accurate and is the global time standard used worldwide to coordinate clocks and systems.
  -How JavaScript stores dates internally: in milliseconds from 1/1/1970 00:00:00 UTC
  -How JavaScript shows time:
    -Text representation: short, long, extended depending on the method
    -Time representation: JavaScript can display the time in UTC or the local time zone (UTC+1 in winter, UTC+2 in summer).
*/


////////////////
////creation////
////////////////
const ahora=new Date();   //current date
const en1970=new Date(0);   //number of miliseconds starting at 01/01/1970 00:00:00 UTC. Can be negative for a date before 1970
const skynetTomaConciencia=new Date(2024, 7, 29, 2, 14, 0, 0); //Creates a date 29/8/2024 2:14:0:0 (year, month (starting at 0), day, hours, minutes, seconds, ms), but it is stored in miliseconds from 1/1/1970 UTC
const finGuerraCivil=new Date(1939, 3, 1);
const caidaMuroBerlin=new Date("1989-11-09");
const espanyaCampeona=Date.UTC(2010,6,11,20,30);   //static method from Date Object that creates a date referencing UTC time, not local time


////////////////////
////Showing date////
////////////////////
/*when using ${}, JavaScript engine calls toString method that converts to human readable format
When not using ${}, console displays the date in a readable format according to the implementation of the browser or environment, usually set to the local zone. In node.js, it is used ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ, 2010-07-10T22:00:00.000Z
    -T-> Separator between Date and time
    -Z-> Indicates that the time is in UTC Format (.)
*/

/*Remember: When you create a date in JavaScript, it is stored internally in UTC (Coordinated Universal Time). 
When you print a Date object without using any method, the format and time reference depend on the environment:
  -In Node.js: It outputs the date in ISO 8601 format (UTC).
  -In web browsers: It usually displays the date in a long, human-readable format based on the local time zone.*/

//Any outputting method returns a primitive string and does not change Date object

//Example 1: output in UTC time using different formats
const skynetTomaConciencia=new Date(2024, 7, 29, 2, 14, 0, 0);
console.log(skynetTomaConciencia.toISOString());    //Displays UTC time in ISO 8601 format. ISO 8601 is an international time representation format. It uses UTC
console.log(skynetTomaConciencia.toUTCString());  //Displays UTC time in HTTP or RFC 7231 format (used in web browsers)
console.log(skynetTomaConciencia.getTime());  //Displays UTC time in miliseconds from 1/1/1970
console.log(skynetTomaConciencia);    //VSCode uses node to show output and node.js shows UTC time. As Spain is UTC+2 in summer, the time is set to 2 hours off. A web browser shows an object in long format and local time 

//Example 2: output in local time using different formats
const skynetTomaConciencia=new Date(2024, 7, 29, 2, 14, 0, 0);
console.log(skynetTomaConciencia.toString()); //Displays local time zone in a long format or full format
console.log(`${skynetTomaConciencia}`);    //Equivalent to .toString()
console.log(skynetTomaConciencia.toLocaleString('es-ES'));  //Displays local date and time in local format. 'es-ES' could be removed and the JS engine would use the default regional settings
console.log(skynetTomaConciencia.toDateString());   //Displays local time zone in short format
console.log(skynetTomaConciencia.toLocaleDateString('es-ES'));  //Displays local time in short local format, only date
console.log(skynetTomaConciencia.toTimeString());  //Displays local time in long local format, only time
console.log(skynetTomaConciencia.toLocaleTimeString('es-ES'));  //Displays local time in short local format, only time


/*Using options to format output with toLocaleString, toLocaleDateString and toLocaleTimeString
The following options can be set:
    weekday: "narrow", "short", "long"
    year: "numeric", "2-digit"
    month: "numeric", "2-digit", "short", "long", "narrow"
    day: "numeric", "2-digit"
    hour, minute and second: "numeric", "2-digit"
    timeZone: "UTC", "Europe/Madrid", "America/Los_Angeles", etc. (default is local time zone)
    timeZoneName: "short", "long"
    hour12: true, false (default)

Recommended for occasionally applying format to dates. Why?
  -When you use toLocaleString(), you have to pass the options each time you call the method, which may not be as efficient if you need to format many dates with the same format, because the JavaScript engine has to interpret and apply those options each time you invoke it.
  -It is not as flexible as Intl object
*/
//Example 3: using options to format output with toLocaleTimeString
const skynetTomaConciencia=new Date(2024, 7, 29, 2, 14, 0, 0);
const opcionesHora = {
  hour: '2-digit', // Mostrar hora en formato de 2 dígitos (01, 02, etc.)
  minute: '2-digit', // Mostrar minutos en formato de 2 dígitos (01, 02, etc.)
  second: '2-digit' // Mostrar segundos en formato de 2 dígitos (01, 02, etc.)
};
console.log(skynetTomaConciencia.toLocaleTimeString('es-ES', opcionesHora));  //Displays UTC time in local format with date and time


//Example 4: using options to format output with toLocaleDateString
const skynetTomaConciencia=new Date(2024, 7, 29, 2, 14, 0, 0);
const opcionesFecha = {
  weekday: 'long', // Día de la semana en formato largo (lunes, martes, etc.)
  year: 'numeric', // Año en formato numérico
  month: 'long', // Mes en formato largo (enero, febrero, etc.)
  day: 'numeric' // Día del mes en formato numérico
};
console.log(skynetTomaConciencia.toLocaleDateString('es-ES', opcionesFecha));  //Displays UTC time in local format with date and time


//Example 5: using options to format output with toLocaleString
const skynetTomaConciencia=new Date(2024, 7, 29, 2, 14, 0, 0);

const opcionesCompletas = {
  weekday: 'long', // día de la semana
  year: 'numeric', // año completo
  month: 'long', // mes completo
  day: 'numeric', // día del mes
  hour: '2-digit', // hora en formato de 2 dígitos
  minute: '2-digit', // minuto en formato de 2 dígitos
  second: '2-digit', // segundo en formato de 2 dígitos
  timeZoneName: 'long' // nombre largo de la zona horar
};
console.log(skynetTomaConciencia.toLocaleString('es-ES', opcionesCompletas));
console.log(skynetTomaConciencia.toLocaleString('es-ES', { timeZone: 'UTC' }));


//Example 6: using toLocaleString to emulate toLocaleTimeString and toLocaleDateString
const skynetTomaConciencia=new Date(2024, 7, 29, 2, 14, 0, 0);
const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
const opcionesFecha = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
console.log(skynetTomaConciencia.toLocaleString('es-ES', opcionesHora));
console.log(skynetTomaConciencia.toLocaleString('es-ES', opcionesFecha));


//Example 7: specifying format options with Intl.DateTimeFormat
/*Intl is global object allowing adaptation of web applications to different languages, cultures and regional formats.
Intl has some constructors:
    -DateTimeFormat to format date and time
    -NumberFormat to format numbers
    -Collator to compare strings
    -PluralRules to create plural rules
    -RelativeTimeFormat to format relative time (5 minutes ago, etc.)

In order to get a correctly formed date:
    -an instance of Intl.DateTimeFormat has to be created 
    -right options need to be set
    -format method has to be invoked. It returns an string and does not change original date

Recommended when working in a context where you are required to format many dates with the same set of options. why?
  -Intl.DateTimeFormat creates a format instance, and the object of that instance is already ‘preconfigured’ with the options you passed it. You can then call the format() method as many times as you need without passing the options again, which can be more efficient when formatting a large number of dates.
*/

const finGuerraCivil = new Date(1939, 3, 1);
const skynetTomaConciencia=new Date(2024, 7, 29, 2, 14, 0, 0);
const caidaMuroBerlin=new Date("1989-11-09");
const espanyaCampeona=new Date (2010,6,11);    

const opciones = {
  weekday: 'long',  // Día de la semana en formato largo
  year: 'numeric',  // Año en formato numérico
  month: 'long',    // Mes en formato largo
  day: 'numeric',   // Día en formato numérico
  hour: '2-digit',  // Hora en formato de dos dígitos
  minute: '2-digit',// Minutos en formato de dos dígitos
  second: '2-digit',// Segundos en formato de dos dígitos
  timeZoneName: 'short' // Zona horaria abreviada
};
const formatoEspañol = new Intl.DateTimeFormat('es-ES', opciones);

console.log(`${formatoEspañol.format(finGuerraCivil)}\n
            ${formatoEspañol.format(skynetTomaConciencia)}\n
            ${formatoEspañol.format(caidaMuroBerlin)}\n
            ${formatoEspañol.format(espanyaCampeona)}`
          );


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
ahora.setDate(-1);  //one day before the last one of the previous month
ahora.setMinutes(68);   //adds minutes to current hour, beginning at 0
ahora.setMinutes(-10);  // ten minutes to the current hour. if the current hour is 21:45, returns 20:50
console.log(ahora);


///////////////////////
////comparing dates////
///////////////////////
//Example 1: by using getTime
//getTime returns miliseconds from 01-01-1970
let fecha1 = new Date('2024-01-01');
let fecha2 = new Date('2024-01-05');

console.log (fecha1.getTime() < fecha2.getTime());


//Example 2: comparing by using mathematical operators
let fecha1=new Date('2024-01-01');
let fecha2=new Date('2024-01-05');
let fecha3=new Date('2024-01-01');

console.log(fecha1 < fecha2);   //< and > work. JavaScript converts each date to miliseconds (using getTime)
console.log(fecha1 > fecha2);  

console.log(fecha1 == fecha3);  //==  doesn't work as it compares references, not values
console.log(fecha1.getTime()==fecha3.getTime());


//Example 3: comparing by substraction
let fechaActual=new Date();
let hace5anyos=new Date(fechaActual);
hace5anyos.setFullYear(fechaActual.getFullYear() - 5); //it substract 5 years, modifying hace5anyos
console.log (fechaActual>hace5anyos);     //fechaActual is a ISO 8601 Date, but JavaScript converts it to ms since 1/1/70 to substract the other date

