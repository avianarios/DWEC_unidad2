# JSDoc Description and Usage

**Descriptive variable and method names** are essential. Documenting your code is a highly recommended practice. Though documenting can be uncomfortable, it is a very important process. While no one enjoys documenting, everyone appreciates understanding someone else’s code.

It is especially important in larger projects where multiple developers work together.

Documentation helps you remember what a method does long after you’ve written it, or helps you understand what a method written by a colleague does.

## Basic Usage of JSDoc

VS Code has basic JSDoc integration. Just type `/** intro` and VS Code will create a basic structure. It does not create all the labels that JSDoc supports.

JSDoc comments must be placed **before the function** in order for VS Code to detect it properly.

JSDoc is available only as a node package. Therefore:
- Node must be installed.
- A node project must be initialized: `npm init`
- The JSDoc package must be installed: `npm i jsdoc --save-dev`

    `"npm install package --save-dev"` is used when dependencies are only needed during project development, not production. These are stored under the `devDependencies` section in `package.json`.
    
    `"npm install package"` is used when dependencies are needed for project production. These are stored under the `dependencies` section in `package.json`.

## Running JSDoc

To execute JSDoc:
- `npx jsdoc file_or_directory`
- `node_modules/js/jsdoc file_or_directory`
- `jsdoc file_or_directory` (if `node_modules/bin` is in the PATH variable)

## Some Interesting JSDoc Parameters

- **Output directory (-d):** If not provided, it defaults to `out`. Example: `jsdoc js_files -d documentation`
- **Template (-t):** `jsdoc js_files -t template-name`

    JSDoc utilizes a template to adjust the visual aspect of the documentation. If not provided, the default "jsdoc" template is used. Examples: `minami`, `docdash`. These need to be installed with `npm i --save-dev template-name` (and also their dependencies), and included in `jsdoc.json` by specifying `"node_modules/minami"` under the "templates" section.

- **Configure file (-c):** `jsdoc js_files -c jsdoc.json`

    This allows using a configuration file to avoid entering the same parameters every time JSDoc is executed. It is recommended for larger projects.

- **Verbose:** `jsdoc js_files -v`
- **Recurse:** `jsdoc directory -r`
- **Ignoring files (by using `.jsignore` file):** `jsdoc js_files -i .jsignore`

- **Plugins (-p or --plugins):** `jsdoc js_files -p plugin-name`

    All of them need to be installed with `npm i --save-dev plugin-name`. Some interesting plugins include:
    
    - **markdown-plugin:** Converts JSDoc comments to markdown format instead of HTML.
    - **jsdoc-babel:** Allows you to use Babel to transpile code and still keep JSDoc working.
    - **jsdoc-export-default:** Improves documentation for functions, classes, or objects exported as default in JavaScript modules. Without this plugin, JSDoc sometimes fails to process default exports properly.
    - **jsdoc-coverage:** Generates a coverage report, showing which parts of the code are documented and which are not.
    - **jsdoc-vue:** Allows documenting Vue components.
    - **eslint-plugin-jsdoc:** A plugin for ESLint that checks if JSDoc comments are correct. Rules must be set in the `.eslintrc.json` file:
    
    ```json
    {
        "plugins": ["jsdoc"],
        "rules": {
            "jsdoc/check-alignment": "error",
            "jsdoc/check-param-names": "warn"
        }
    }
    ```

## Some Interesting Plugins That Come with JSDoc

- **Markdown:** Markdown is a lightweight markup language with plain text formatting syntax. It is used to write documentation in a more readable way. It is recommended to use the markdown plugin to generate documentation in markdown format. Some examples:
    - `# Header level 1`
    - `## Header level 2`
    - `### Header level 3`
    - `**bold text**` or `__bold text__`
    - `*italic text*` or `_italic text_`
    - Unordered lists: Use `-`, `*`, or `+`.
    - Ordered lists: Use numbers followed by a period.
    - Links: `[Link text](https://example.com)`
    - Images: `![Alt text](https://example.com/image.png)`
    - Code blocks: Use three backticks (```) before and after the block of code. You can specify the programming language after the initial three backticks for syntax highlighting.

- **Cleverlinks:** Automatically creates links within the same documentation, meaning that if you mention the name of a function, class, data type, or any other symbol that is documented within the same generated documentation, JSDoc will automatically create a link to that reference.

- **MonospaceLinks:** Makes internal links to documentation code look like code, using a monospace typeface.
