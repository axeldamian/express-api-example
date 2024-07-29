## Descripcion

Api en express.js que expone endpoints y también hace llamados a apis con axios.

## Que instalar
Se debe instalar node.js y npm (se puede con yarn), es obligatorio.

npm creo que viene instalado con node, no es aparte.

## Paquetes a instalar
Lo que dice el package.json, pero si se quiere hacer a mano:

Instalar Express.js (para crear un servidor, exponer endpoints con verbos y escuchar un puerto).
```
npm install express
```

Instalar Axios (para hacer api calls)
```
npm install axios
```

Instale nodemon, pero porque quize
```
npm i nodemon
```
Reinicia la aplicación sola si realizo cambios, para no hacerlo yo cada rato.
capaz hay que ponerle ```--save-dev```

Para correr nodemon
```
npm run start
```

Yarn es como npm un package manager, npm es node package manager (dicen que no, pero no tiene sentido otra explicación).
No conviene instalar Yarn con npm.

## Ejecutar aplicación

```
node app.js    
```
o
```
npm run start
```

Con nodemon
```
npm run dev
```
