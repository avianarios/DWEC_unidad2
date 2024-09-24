//Explain the final values of all variables a, b, c and d
let a = 1, b = 1;
let c = ++a;
let d = b++;

//Explain the final value of x
let a = 2;
let x = 1 + (a *= 2);

//Explain the reason of the output of every of the following expressions
console.log (5 > 4);
console.log ("apple" > "pineapple");
console.log ("2" > "12");
console.log (undefined == null);
console.log (undefined === null);
console.log (null == "\n0\n");
console.log (null === "\n0\n");
console.log ("" + 1 + 0);
console.log ("" - 1 + 0);
console.log (true + false);
console.log (6 / "3");
console.log ("2" * "3");
console.log (4 + 5 + "px");
console.log ("$" + 4 + 5);
console.log ("4" - 2);
console.log ("4px" - 2);
console.log ("  -9  " + 5);
console.log ("  -9  " - 5);
console.log (null + 1);
console.log (undefined + 1);
console.log (" \t \n" - 2);


//Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly. The output in the example below is 12 (for default prompt values). Why? Fix it. The result should be 3
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b);