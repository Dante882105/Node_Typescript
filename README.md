# Creación primer back con Node y Typescript
Inicializamos el proyecto y en el package.json, agregamos una metaclase llamada tsc para convertir los ficheros de typescript a javascript.
```
{
  "name": "back_node_ts",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node-dev src/index.ts",
    "start": "node build/index.js",
    "tsc": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Daniel Bernal",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@types/express": "^5.0.0",
    "ts-node-dev": "^2.0.0",
    "ts-standard": "^12.0.2",
    "typescript": "^5.6.3"
  },
  "dependencies": {
    "express": "4.21.1"
  }
}
```
Luego de ello usamos el comando npm run tsc -- --init para que inicialice el tsc y no el run de npm.
```
npm run tsc -- --init
```
## tsconfig.ts
Al hacer éste comando aparecerá un archivo de nombre tsconfig.ts el cual permitirá establecer configuraciones de typescript para el proyecto.
Dejaré algunas de ellas detalladas en este readme.

* "target": "es2016" (especifica la versión a utilizar de js para ts).
* "module": "commonjs" (Para manejo de requires y demás de los módulos).
* "outDir": "./build" (para especificar dónde se guardaran los archivos ts a js, el nombre puede ser el que se desee).
* "strict": true (Utilizado para que la verificación de los typos de ts sea estricta y realice verificaciones más específicas de cada tipo).
* "noUnusedLocals": true (Para validar el uso de variables locales en el proyecto).
* "noUnusedParameters": true (Para validar parametros que no son leidos).
* "noImplicitReturns": true (Para obligar a hacer retornos de resultados en las funciones).
* "noFallthroughCasesInSwitch": true (Obliga a que en los Switch case se tenga un return o un breack).
* "esModuleInterop": true (usado para que funcione commonjs como ES6 Modules).

## Librerías usadas en éste proyecto

Para la creación de un server usamos express y el -E se usa para utilizar una versión exacta.
```
npm install express -E
```
Para utilizar las tipologías de typescript y express instalamos el siguiente paquete y el -D se usa para que lo instale como dependencia de develop así evitando que el proyecto quede más pesado para un usuario que descargue e intale el proyecto en otro equipo.
```
npm install @types/express -D
```
Para que la app actualice de forma automática los cambio y reinicie la app, usamos la siguiente librería para desarrollo y se define en el package.json en las metaclases de scripts así:  "dev": "ts-node-dev src/index.ts".
```
npm install ts-node-dev -D
```
## Crear Types en Nodejs

Para la creación de tipos de typescript en Nodejs, se deberá ejecutar desde un archivo normalmente llamado types.ts o types.d.ts. Para el caso de éste proyecto se encuentra en la siguiente ruta en el cual está la visualización de cómo ejercutar el código para los tipados.
* back_Node_ts\src\types.ts