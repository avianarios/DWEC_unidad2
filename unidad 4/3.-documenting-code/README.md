# Ejemplo del uso de JSDoc con Node.js

Los pasos para echar a andar este proyecto con Node.js son los siguientes:

1. **Instalar Node.js** en el directorio del proyecto.

2. **Iniciar el proyecto con `npm init`**.  
   Responde a las preguntas para generar el archivo `package.json`, que es el fichero de configuración de Node.js.

3. **Instalar paquetes y sus dependencias** con `npm install --save-dev <nombre_paquete>`.  
   - Recuerda que con `--save-dev` se instalan los paquetes que solo se necesitan para desarrollo, no para producción.  
   - Para producción, se usaría: `npm install <nombre_paquete>`.

   Ejemplos:
   - `npm install --save-dev jsdoc`
   - `npm install --save-dev rimraf`
   - `npm install --save-dev minami`

4. **Crear un fichero de configuración de JSDoc** llamado `jsdoc.json`.  
   Este archivo contendrá los parámetros necesarios para generar la documentación automáticamente, evitando tener que ingresarlos manualmente cada vez que se ejecute. *(Consulta el archivo `jsdoc.json` para más detalles.)*

5. **Abrir el archivo `package.json`** y crear los scripts necesarios para automatizar tareas.  
   Si no se crean los scripts, deberás ejecutar manualmente:
   ```bash
   npx jsdoc -c jsdoc.json
