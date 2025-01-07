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
//place a breakpoint at the "if" sentence of factorial function
// watch how n changes its value at section "variables"
// add the expression n==0 to inspect and look the result of this evaluation
// Iterate by using:
    // Continue (F5): Resumes the program execution until the next breakpoint. 
    // Step over (F10): Executes the code line by line, but without stepping into called functions (i.e., it executes the code at the current level). 
    // Step into (F11): Executes the code line by line, but if it encounters a function, it steps into it to debug as well. 
    // Exit debugging (Shift+F11): Ends the debugging session and exits the current process, stopping the program execution.

// Función que suma dos números
function suma(a, b) {
    return a + b;
}

// Función que calcula el factorial de un número
function factorial(n) {
    if (n == 0) return 1; // Caso base
    return n * factorial(n - 1); // Llamada recursiva
}

// Llamadas a las funciones
console.log("Suma de 5 y 3:", suma(5, 3));

const numero = 5;
console.log(`Factorial de ${numero}:`, factorial(numero));

// Bucle para probar puntos de interrupción
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}
