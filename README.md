# Práctica 9 Despliegue en AWS

Dirección IP: 54.175.122.218 
Dirección de despliegue: http://ec2-54-175-122-218.compute-1.amazonaws.com/

# Práctica 7 Backend Avanzado con Node

En esta práctica trabajaremos sobre la práctica que desarollamos anteriormente en el módulo de backend con node. Daremos seguridad al API mediante autenticación por token JWT, internacionalizamos la web para que esté disponible en 2 idiomas con I18N y por último desarrollamos una subida de imagen con tarea en background a través de un microservicio que se encargue de crear miniaturas de las fotos subidas.

## Comenzando 🚀

_Lo primero será acceder a al carpeta del proyecto:_

```
cd nodepop
```
_Para probar el proyecto únicamente es necesario instalar las dependencias:_

```
npm install
```

_A continuación cargamos la base de datos a través del script de inicialización:_

Nos pedirá la confirmación por lo que tendremos que escribir "si" en el terminal y pulsar enter.

Este comando creará 10 anuncios y 2 usuarios. ( user@example.com con la contraseña 1234)

```
node initDB.mjs
```

corremos la App con el comando:_

```
nodemon app.js
```

## Iniciando el microservicio ⚙️

_Abrimos un nuevo terminal y accedemos a la carpeta "Microservice"_

```
cd nodepop
cd microservice
```

_Iniciamos el microservicio_

```
nodemon thumbnailService.js

```

## Funcionamiento ⚙️

Probaremos la práctica a través de POSTMAN. 

Se podrán pedir al api el listado de anuncios mediante petición GET o publicar un anuncio nuevo mediante una petición POST, ambos deberán llevar un TOKEN en la cabecera, por query string o bien dentro del body para validar la autenticación. Este token tendrá que ser obtenido previamente mediante una petición POST al endpoint de login 

_http://localhost:3000/api/login_

<img src="nodepop\public\images\ejemplo-post.png" alt="Petición post"/>

## Construido con 🛠️

* I18N
* COTE
* JWT
* JIMP

## Autor ✒️

* **Marcelo Hornillos**

Práctica del Bootcamp Keepcoding Fullstack Web 12º Edición
