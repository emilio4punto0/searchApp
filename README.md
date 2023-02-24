# searchApp
Fullstack App buscador de productos

## Table of Contents
1. [General Info](#general-info)
2. [Tecnologías](#tecnologías)
3. [Instalación](#instalación)
4. [Consideraciones generales](#consideraciones-generales)
### General Info
***
Las tecnologías utilizadas fueron Sass, javascript, React, Node y Express.

## Tecnologías
***
Tecnologías y versiones usadas: 
* [Node](https://example.com): Version 16.17.0
* [Express](https://example.com): Version 4.18.2 
* [React](https://example.com): Version 18.2.0
* [Sass](https://example.com): Version 1.58.1
* [Vite](https://example.com): Version 4.1.0
## Instalación
***
Luego de clonar el repositorio. La aplicación requiere ser inicializada con dos consolas una para el backend: 
```
$ cd Backend
$ npm start
```
y adicionalmente correr en otra terminal lo correspondiente a la inicialización del front:
```
$ cd test-mercado-libre
$ npm run dev

```
Importante: Las vistas consumen datos de endpoints que son generados y manejados desde el backend, sin la inicialización del servidor y midelwares la funcionalidad no va a tener el correcto funcionamiento.

## Consideraciones generales
***
* -Para evitar problemas de Cors al realizar pruebas se le asignó al servidor el puerto http://localhost:3000 y al front http://localhost:5173 en configuración si es necesario tener en cuenta la modificación de esta configuración.
* -El item de descripciones de producto de la API en todos los casos que ocupé siempre vino vacío le coloque una validación para que en caso de venir vacío no muestre el elemento.
* -Las imágenes de los productos vienen continuamente con diferentes medidas lo cual puede modificar el resultado esperado en la maquetación.
* -El item de categorías para realizar el componente breadcrumb no se obtiene en el resultado de la API.


