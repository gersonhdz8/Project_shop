
# Página de Compra de Productos - Documentación

Esta es una página de compra de productos que ofrece una variedad de productos organizados en cinco categorías diferentes, tiene la funcionalidad de ver todos los productos apenas se ingresa a la página, y tiene 5 apartados dependiendo de la categoria del producto, tiene una función para agregar productos al carrito y tiene la función de ver el carrito. Los siguientes endpoints te permiten interactuar con la página y acceder a los productos.

## Cómo empezar

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando
```bash
  npm install
```
3. Inicia el servidor de desarrollo del frontend:
```bash
  npm run dev
```
4. Inicia el servidor del backend:
```bash
  npm run start
```
####  Nota: En caso de que no funcionen las variables de entorno del archivo .env, acomodelas a su cluster de mongodb y luego ejecute el archivo "query.mongodb", después de esto puede hacer los pasos anteriores.


## Endpoints
### 1. `/producto`
- **Descripción**: Este endpoint te muestra todos los productos disponibles en nuestra tienda.
- **Método**: GET
### 2. `/producto/categoria1`
- **Descripción**: Este endpoint te muestra los productos de la categoría 1.
- **Método**: GET
### 3. `/producto/categoria2`
- **Descripción**: Este endpoint te muestra los productos de la categoría 2.
- **Método**: GET
### 4. `/producto/categoria3`
- **Descripción**: Este endpoint te muestra los productos de la categoría 3.
- **Método**: GET
### 5. `/producto/categoria4`
- **Descripción**: Este endpoint te muestra los productos de la categoría 4.
- **Método**: GET
### 6. `/producto/categoria5`
- **Descripción**: Este endpoint te muestra los productos de la categoría 5.
- **Método**: GET


## Funcionalidad
1. Se aprecia la página inicial con todos los productos de todas las categorias
2. Seleccione cualquier categoria en la parte de arriba del NavBar
3. Agrega un producto oprimiendo el boton agregar y luego seleccione la cantidad
4. Oprima el botón Add cart.
5. Cierre el modal y oprima el botón de carrito en la parte de arriba del Navbar.

![](src\assets\Screenshot_1.png)
![](src\assets\Screenshot_2.png)
![](src\assets\Screenshot_3.png)
![](src\assets\Screenshot_4.png)

## Authors

- [Gerson Hernández](https://www.github.com/gersonhdz8)