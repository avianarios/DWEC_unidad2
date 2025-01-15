# Proyecto de uso de JSDoc con Node.js

JSDoc es una herramienta y un estándar de documentación para JavaScript que permite agregar comentarios en el código con un formato especial para describir funciones, variables, clases, y otros elementos del código. Estos comentarios se procesan para generar automáticamente documentación legible en formato HTML o en otros formatos.

Los pasos para echar a andar este proyecto con Node.js son los siguientes:

1. **Instalar Node.js** en el equipo

2. **Iniciar el proyecto desde su directorio con `npm init`**.  
   Responde a las preguntas para generar el archivo `package.json`, que es el fichero de configuración de Node.js.
   No uses mayúsculas ni espacios en el campo "name"

3. **Instalar paquetes y sus dependencias**
   -`npm install --save-dev <nombre_paquete>` para instalar paquetes en el proyecto actual que solo se necesitan para desarrollo
   -`npm install <nombre_paquete>` para instalar paquetes en el proyecto actual que se necesitan para producción
   -`npm install -g <nombre_paquete>` para instalar paquetes de forma global, no sólo para el proyecto actual

   Paquetes para este proyecto:
   - `npm install --save-dev jsdoc rimraf minami npm-run-all taffydb`

4. **Crear un fichero de configuración de JSDoc** llamado `jsdoc.json`.  
   Este archivo contendrá los parámetros necesarios para generar la documentación automáticamente, evitando tener que ingresarlos manualmente cada vez que se ejecute. *(Consulta el archivo `jsdoc.json` para más detalles.)*

5. **Abrir el archivo `package.json`** y crear los scripts necesarios para automatizar tareas.  
   Si no se crean los scripts, deberás ejecutar manualmente:
   ```bash
   npx jsdoc -c jsdoc.json
