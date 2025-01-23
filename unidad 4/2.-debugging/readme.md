# Debugging

**Debugging** is the process of finding and fixing errors in the code. It's an essential skill for developers.  
Sending variable values to `console.log` is a basic way to debug code. However, it's not the most efficient method. In larger projects, it's better to use a debugger.

Debugging can be done by setting breakpoints in the code. A **breakpoint** is a point where the execution of the code stops, allowing the developer to inspect the values of the variables and the state of the program.

## How to Debug?

### In the Browser:
- By including the JS file in an HTML file, opening it in a web server, and using the browser's developer tools.

### In VS Code:
- The first time you run the debugger, it will create a `launch.json` file in the `.vscode` folder. This file contains the configuration for the debugger. You can modify this file to change the debugger's configuration.
- VS Code will ask you to select the environment you want to debug:
    - **Node.js**: This environment needs to be installed.
    - **Browser Debugger**: You can debug the browser by installing an extension that connects to the browser.
        - Install the extension (e.g., "Debugger for Firefox" in Firefox).
        - Enable remote debugging in Firefox:  
          `about:config -> devtools.debugger.remote-enabled = true`.
        - Configure the remote debugger port in Firefox:  
          `about:config -> devtools.debugger.remote-port = 3000` (the number must match the one in `launch.json`).
        - Configure `launch.json`, which is a file created the first time you run the debugger. It's located in the `.vscode` folder.

If several configurations are present in `launch.json`, you can select the one you want to use by clicking on the gear icon in the debug panel and choosing the configuration you want to use.

Thus, customized configurations can be created with specific properties to adapt to the needs of your project, such as the file you want to debug, the URL of your local server, or additional debugging options.

The **output** is located at the "Consola de depuración."

## Iteration Controls

- **F5 (Continue)**: Resumes the program execution until the next breakpoint.
- **F10 (Step Over)**: Executes the code line by line, but if it encounters a function, it will execute the function completely without entering it.
- **F11 (Step Into)**: Executes the code line by line, but if it encounters a function, it steps into it.
- **Shift+F11 (Exit Debugging)**: Ends the debugging session and exits the current process, stopping the program execution.

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%204)
