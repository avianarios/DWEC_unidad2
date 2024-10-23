////////////////
////creation////
////////////////
zzzzzzzz
aclarar UTC 


//Example 1: creating a new date 
let ahora=new Date();   //current date
let en1970=new Date(0);   //number of miliseconds starting at 01/01/1970. Can be negative for a date before 1970
let fecha=new Date(2018, 9, 20, 14, 21, 0, 0); // (year, month (starting at 0), date, hours, minutes, seconds, ms)
console.log (ahora, en1970, fecha);

//Example 2: creating a new date object from a string
let haceAnyos = new Date("2018-10-20");
let ms = Date.parse("2012-01-26T13:51:50.417-07:00");   //it gets miliseconds from base date
let date = new Date(Date.parse("2012-01-26T13:51:50.417")); //it creates a new date from a string
console.log(haceAnyos, ms, date);


////////////////////
////getting date////
////////////////////
//Example 1: getting date information
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
//Example 1: setting date information

ahora.setFullYear(2022);
ahora.setMonth(ahora.getMonth()-2);
ahora.setDate(-1);  //can use negative numbers meaning one day before the last one of the previous month
ahora.setMinutes(68);   //adds minutes to current hour, beginning at 0
ahora.setMinutes(-10);  //returns ten minutes to the current hour. if the current hour is 21:45, returns 20:50
console.log(ahora);


//////////////////////////
////substracting dates////
//////////////////////////
console.log (ahora-hace5anyos); //returns nº of miliseconds
console.log (ahora.getTime()-hace5anyos.getTime()); //it does the same but, apparently, quicker


///////////////////////
////converting date////
///////////////////////
const cumpleaños = new Date(1990, 4, 15);
//Example 1: no conversion at all
console.log (cumpleaños);

//Example 2: converting to string
console.log(cumpleaños.toString());

//Example 3: converting to local format
console.log(cumpleaños.toLocaleDateString());

//Example 4: converting to a human readable format, removing the time
console.log(cumpleaños.toDateString()); 
