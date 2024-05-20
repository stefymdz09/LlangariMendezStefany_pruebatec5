

## Descripción

Este proyecto consiste en la creación de dos páginas distintas: `create-product-page` y `list-product-page`. El propósito de estas páginas es permitir a los usuarios agregar nuevos productos mediante un formulario en la primera página, y luego visualizar y almacenar la lista de productos en la segunda página.

## Pages

### create-product-page.js

Este componente define la página de creación de productos. Utiliza varios componentes de BBVA para crear un formulario que permite a los usuarios ingresar los detalles del producto.


En la página `create-product-page` se diseña un formulario para agregar un producto utilizando los siguientes componentes de BBVA Web Components:

- `@bbva-web-components/bbva-web-form-text` para el nombre del producto.
- `@bbva-web-components/bbva-web-form-amount` para el precio del producto.
- `@bbva-web-components/bbva-web-form-textarea` para la descripción del producto.
- `@bbva-web-components/bbva-web-button-default` para el botón de confirmación.

El botón de confirmación debe estar configurado para disparar los eventos `publish` y `navigate`. El evento `publish` se utilizará para enviar la información del producto a otras partes de la aplicación, en este caso a la pagina list-product.

### Página list-product-page

En la página `list-product-page`, se debe:

- Suscribirse al evento publicado en la primera página (`create-product-page`) en el ciclo de vida `onPageEnter`.
- Almacenar la información del producto en `localStorage` para su persistencia.
- Utilizar el componente `bbva-web-card-product` para listar todos los productos almacenados en `localStorage`, proporcionando una representación visual de cada producto.


## Ejercutar

Para instalar y ejecutar el proyecto, sigue estos pasos:

- **Ejecuta el proyecto:**

    ```bash
    npm run start
    ```

## Vista de la pagina create-product

Aquí hay algunas capturas de pantalla que muestran el funcionamiento de la página:


![Crear Producto](/images/AddProduct.png)
*Añadir nombre, descripcion, imagen y precio del producto*




## Componentes y Métodos

### list-product-page.js

Este componente define la página de listado de productos. Utiliza los siguientes componentes de BBVA Web Components:

- `bbva-web-card-product`: Se utiliza para mostrar cada producto almacenado en localStorage.
- `bbva-web-form-select`: Se utiliza para proporcionar un menú desplegable que permite al usuario ordenar los productos por precio o nombre.
- `bbva-web-form-option`: Opciones dentro del menú desplegable que permiten al usuario seleccionar cómo se ordenan los productos.
- `bbva-web-button-default`: Componente de botón utilizado para eliminar productos.

#### Métodos

- **`loadProducts()`:** Este método se utiliza para cargar los productos almacenados en `localStorage` cuando se inicializa la página. Si no hay productos almacenados, devuelve un array vacío.
- **`connectedCallback()`:** Este método es llamado cuando el elemento se conecta al DOM. Se suscribe al evento `detail_open` para detectar cuándo se ha abierto un detalle de producto.
- **`onPageEnter()`:** Se suscribe al evento `AddProduct` para recibir notificaciones cuando se añade un nuevo producto. Luego actualiza la lista de productos, guarda los productos en `localStorage` y solicita una actualización de la página.
- **`saveProducts()`:** Guarda la lista de productos en `localStorage` después de que se haya actualizado.
- **`handleSortChange(event)`:** Maneja el cambio en el menú desplegable de selección de orden. Dependiendo de la opción seleccionada, ordena los productos por precio ascendente, precio descendente, nombre ascendente o nombre descendente.
- **`deleteProduct(productId)`:** Elimina un producto de la lista y actualiza el localStorage y la interfaz de usuario..

#### Componentes Utilizados

- **`bbva-web-card-product`:** Componente que muestra visualmente la información de un producto.
- **`bbva-web-form-select`:** Componente que proporciona un menú desplegable para seleccionar opciones de filtrado.
- **`bbva-web-form-option`:** Opciones dentro del menú desplegable para seleccionar el criterio de ordenación de los productos.

## Vista de la pagina list-product

Aquí hay algunas capturas de pantalla que muestran el funcionamiento de la página:


![Ver Productos](/images/ListProducts.png)
*Ver productos creados*
#### Uno de los aspectos a mejorar

La barra de navegación se muestra con el texto demo-menu-container-web
![Sidebar](/images/SideBar.jpeg)