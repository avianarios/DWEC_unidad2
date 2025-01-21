/////////////////////////////////
////Example to test debugging////
/////////////////////////////////
//Example 1. 
// Place a breakpoint at "let resultadoSuma=suma(i, i+1);"" line.
// Place a breakpoint at "let resultadoResta=resta(i,i+1);" line. Right click on the breakpoint and select "Add conditional breakpoint". Write "resultadoMultiplicacion==6" and press enter. This conditional breakpoint will stop the execution when resultadoMultiplicacion is equal to 6 and must be set after resultadoMultiplicacion is defined and assigned. It can't be done at the same line
// Add i, suma(i,i+1), resultadoMultiplicacion and resultadoDivision to inspection to watch their values
// Open debugging console in the bottom panel
// Start debugging by pressing play or F5. It will stop at the first breakpoint.
// Press F5 three times. It will stop at the next breakpoint. Watch how it stops at conditional breakpoint only at the second press (when condition is met)
// Press F10 several times. Debugger will move to the next sentence and execute it. If it is a function, it will not step into it. Watch how variables change
// Press F11 several times. Debugger will move to the nexte sentence and execute it. If it is a funciont, it will step into and execute it line by line. Watch how variables change

let suma = (a, b) => a+b;
let multiplicacion = (a, b) => a*b;
let division = (a, b) => a/b;
let resta = (a, b) => a-b;

for (let i = 1; i <= 100; i++) {
    let resultadoSuma=suma(i, i + 1);
    let resultadoDivision=division(i,i+1);
    let resultadoMultiplicacion=multiplicacion(i,i+1);
    let resultadoResta=resta(i,i+1);
    console.log(`suma de ${i} y ${i + 1}: ${resultadoSuma}`);
}