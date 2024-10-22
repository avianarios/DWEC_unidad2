let ahora=new Date();
let en1970=new Date(0);   //number of miliseconds starting at 01/01/1970. Can be negative for a date before 1970
let hace5anyos = new Date("2018-10-20");
let fecha=new Date(2018, 9, 20, 14, 21, 0, 0); // (year, month (starting at 0), date, hours, minutes, seconds, ms)

console.log (ahora, en1970, hace5anyos, fecha);

//some getters
console.log (
    ahora.getFullYear(),
    ahora.getMonth(),
    ahora.getDay(),
    ahora.getHours(),
    ahora.getDate() //gets day of month. Not really intuitive
);

//some setters
ahora.setFullYear(2022);
ahora.setMonth(ahora.getMonth()-2);
ahora.setDate(-1);  //can use negative numbers meaning one day before the last one of the previous month
ahora.setMinutes(68);   //adds minutes to current hour, beginning at 0
ahora.setMinutes(-10);  //returns ten minutes to the current hour. if the current hour is 21:45, returns 20:50
console.log(ahora);


//substracting dates to compare
console.log (ahora-hace5anyos); //returns nº of miliseconds
console.log (ahora.getTime()-hace5anyos.getTime()); //it does the same but, apparently, quicker

//creating a new date object from a string
let ms = Date.parse("2012-01-26T13:51:50.417-07:00");   //it gets miliseconds from base date
let date = new Date(Date.parse("2012-01-26T13:51:50.417")); //it creates a new date from a string
console.log(ms, date);