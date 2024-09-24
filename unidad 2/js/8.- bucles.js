//while
//code inside the loop is executed only if the condition is true
let i = 0;
while (i < 3) {
  console.log( i++ ); //it outputs i value and then increment it
}

let j = 0;
while (j < 3) {
  console.log( ++j ); //it increments j value and then shows it
}

let k = 5;
while (k) { //elegant way to write k>0
  console.log( k-- ); 
}

while (1){ //infinite loop
  //something
}

//do...while
//Code inside the loop is executed, at least, 1 time before checking condition
let l = 0;
do {
  console.log( l++ );
} while (l <= 3);

do{
  //something
} while (1);  //infinite loop

//nested loops
for (let m = 0; m < 3; m++) { // shows 0, then 1, then 2
  for (let n = 0; n < 3; n++) { // shows 0, then 1, then 2
    console.log(m,n);
  }
}

//endless for
for (;;){
  console.log("this loop will never end, unless you press ctrl+c");
}

//break can be used to exit the loop, but it is not recommended. 
//The best way to leave it is the condition
let suma=0;
//bad coding
while (1){  //will repeat forever, 
  suma++;
  if (suma==5) break;
}

//better
suma=0;
while (suma<5){
  suma++;
}

//much better
for (suma=0;suma<5;suma++);


//continue will finish the actual iteration and move on to the next one
for (i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  console.log(i);
}
//same effect as before, but better coding
for (i = 0; i < 10; i++) {
  if (i % 2) {
    console.log( i );
  }
}

//break/continue can't be used with question operator
i=0;
(i<10) ? i++ : continue;


//break only stops one loop so, in order to stop two or more, labels have to be used
salida: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break salida; 

    console.log(`you have chosen ${i}${j}`);
  }
}


//Iterable and non-iterable objects//
//for...of -> iterable elements
const matriz= [1, 2, 3];

for (let elemento of matriz) {
  console.log(elemento);  // 1, 2, 3
}

//for...in -> non-iterable object
const obj = { name: "Alice", age: 25 };

for (let key in obj) {
  console.log(key, obj[key]);  // name Alice, age 25
}