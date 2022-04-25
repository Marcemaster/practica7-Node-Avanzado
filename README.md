# Práctica 4 WEB-API / Node.js / MongoDB

En esta práctica desarrollamos el API que se ejecutará en el servidor de un servicio de venta de artículos de segunda mano llamado Nodepop.

El servicio contiene anuncios de compra o venta de artículos y permite filtrar anuncios por varios criterios (Nombre, venta, precio, tags.)

Además, permite la creación de anuncios y la extracción una lista de los "Tags" incluidos.

Por último, se ha incoporado una barra de buscador por nombre en la pantalla inicial para filtrar los anuncios por nombre a través del teclado.


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

```
node initDB.mjs
```

_Por último, corremos la App con el comando:_

```
nodemon app.js
```


## Funcionamiento ⚙️

_Con el servidor corriendo podemos acceder a la ruta:_

http://localhost:3000

_para ver un listado de todos los anuncios cargados desde el instalador._

_Esta lista de anuncios podemos fitrarla a través de la barra de navegación utilizando cualquiera de los siguientes filtros:_

* **limit** // Limitar el nº de anuncios
* **sort** // Ordenar
* **nombre** // Filtrar por nombre 
* **skip** // Saltar anuncios
* **precioMin** // Poner un precio mínimo
* **precioMax** // Poner un precio máximo
* **tags** // Filtrar por etiquetas
* **venta** // Filtrar por producto en venta o en búsqueda


### Rutas 🖇️

_También podemos acceder directamente a al API con la ruta: _

http://localhost:3000/api/anuncios

_La cual nos devuelve un JSON con todos los anuncios (En esta ruta también podemos aplicar los filtros)_


_Para obtener un JSON con todos los tags de los anuncios en la base de datos accedemos a la ruta:_

http://localhost:3000/api/anuncios/tags


_Por último, podemos hacer peticiones POST a la ruta:_

http://localhost:3000/api/anuncios

_La cual nos creará un nuevo anuncio y lo guardará en la base de datos, o bien nos devolverá una respuesta con los campos a rellenar para poder crear el anuncio correctamente._


### Ejemplo de peticiones con filtros ⌨️

_Ordenar anuncios por nombre, de máximo 50€, que contengan el tag "lifestyle" y limitado a 2 anuncios:_

http://localhost:3000/?sort=nombre&precioMin=50&tags=lifestyle&limit=2


_Anuncios en venta, ordenados por precio_

http://localhost:3000/?sort=precio&venta=true


## Construido con 🛠️

* Node
* MongoDB
* Express
* EJS


## Autor ✒️

* **Marcelo Hornillos**

Práctica del Bootcamp Keepcoding Fullstack Web 12º Edición