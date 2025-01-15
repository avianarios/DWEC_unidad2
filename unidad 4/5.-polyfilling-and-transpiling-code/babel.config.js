/*configures babel to transpile code
Three options:
    -using a js file
    -using a json file (removing export default)
    -including the configuration in the package.json file
    -including the configuration in the webpack configuration file

Which is the difference between using a js file and a json file?   
    -Json is simpler but less flexible. It is a good option for simple configurations.
    -js allows to use JavaScript code to define the configuration. This is more flexible and powerful, but also more complex.


Keeping configuration in babel file, webpack file or package.json file?
    -keeping a babel file
        -it can make your project easier to manage especially in bigger projects or when you have multiple babel configurations for different environments.
        -if you need especific configurations for differents environments, it is easier to do it in a dedicated file.
    -integating the configuration in the webpack or package.json file
        -it can be easier to manage the project configuration (scripts, dependencies and configurations) in a single file, especially for small or medium projects.
        -it is easier to share the configuration with other developers, as it is included in the project configuration file.
        -it keeps the project simpler, as there are fewer files to manage.
*/

export default {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: '> 0.25%, not dead', // Especifica los navegadores a los que debe apuntar Babel
          useBuiltIns: 'usage',        // Incluir los polyfills estrictamente necesarios según el código, no todos
          corejs: 3                    // Utilizar CoreJS 3 para los polyfills
        }
      ]
    ]
  };
  