/*
Debugging is the process of finding and fixing errors in the code. It's an essential skill for developers.
Sending variable values to console.log is a really basic way to debug code. However, it's not the most efficient way to do it. In larger projects, it's better to use a debugger.

Debugging can be done by setting breakpoints in the code. A breakpoint is a point where the execution of the code stops and the developer can inspect the values of the variables and the state of the program

How to debug? 
    -in the browser: by including the js file in an HTML file, opening it in a web server and using the browser's developer tools
    -in VS Code. First time you run the debugger, it will create a launch.json file in the .vscode folder. This file contains the configuration of the debugger. You can modify this file to change the configuration of the debugger. VS Code will ask you to select the environment you want to debug:
        -...node.js, that has to be installed
        -...the browser debugger by installing an extension that connects to the browser.
            -Install the extension ("Debugger for Firefox" in Firefox)
            -Enable remote debugging in Firefox: about:config -> devtools.debugger.remote-enabled = true
            -Configure remote debugger port in firefox: about:config -> devtools.debugger.remote-port = 3000 (number must be match launch.json)
            -Configure launch.json, that it's a file created the first time you run the debugger. It's located in .vscode folder

            If several configurations are present in launch.json, you can select the one you want to use by clicking on the gear icon in the debug panel and selecting the configuration you want to use.

            Thus, customized configurations can be created with specific properties to adapt it to the needs of your project, such as the file you want to debug, the URL of your local server, or additional debugging options.

Output is located at "Consola de depuración"

*/
/////////////////////////////////
////Example to test debugging////
/////////////////////////////////
/*Iterate by using:
-F5 (Continue): Resumes the program execution until the next breakpoint.
-F10 (Step Over): Executes the code line by line, but if it encounters a function, it will execute the function completely without entering it. 
-F11 (Step Into): Executes the code line by line, but if it encounters a function, it steps into it. 
-Shift+F11 (Exit debugging): Ends the debugging session and exits the current process, stopping the program execution.*/

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