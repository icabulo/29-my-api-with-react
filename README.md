# Integración API con React

En esta misión vamos a practicar el consumo de un API desde un proyecto de react.

Para esta misión se usó el desarrollado del API para [assessment backend](https://github.com/icabulo/backend-assesment-mirv26).

## Tareas:

1. Crear un proyecto de React el cual debe tener las siguientes rutas:

- **/login**:

Es la ruta por defecto en caso de que el usuario no haya iniciado sesión, debe mostrar un formulario de inicio de sesión y al realizar la acción de "ingresar", se debe consultar validar dicho usuario en la api mencionada anteriormente y hacer redirección a /favs.

- **/favs**:

Esta ruta muestra los favoritos y permite la realización del CRUD de los mismos. De manera que se consuman todos los endpoints creados en el API. Además esta ruta debe validar si el lusuario está autenticado para poder mostrar la interfaz del CRUD, sino, debe redirigir a la ruta de login.

2. Desplegar en netlify.
