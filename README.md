# Component Steam

## E-commerce Comision 45060

Este proyecto fue creado para el Curso de RectJS. Es un E-comerce centrado en la venta de perifericos para PC.
Esta pagina esta conectado a un backend realizado con `Firebase`.
Permite agregar varios productos a un carrito de compra. Tambien se puede ver el detalle de cada producto y sumar cantidad del mismo.
Al realizar el checkout de la compra se solicita llenar un formulario con datos basicos. Una vez realizada la accion se genera un id de Orden para el usuario y en firebase se guarda la orden con los productos que compró.

## :computer: Link de la pagina en Netfly:
****

**Tecnologías y librerías:**
- Interfaz realizada con **ReactJS - Create React App**
- Estilos con **Bootstrap**, **Material-UI**
- Ruteo con **React Router Dom**
- Backend con **Firebase**


## Correr proyecto
- Se puede clonar el proyecto utilizando el siguiente comando.
```bash
  git clone
```
## Instalar dependencias.
```bash
npm install
```

## Correr el proyecto en el navegador:
```bash
npm start
```
## Backend

Se realizo un backend con Firebase, por si quieren descargar y correr este proyecto, tienen que generar su backend en firebase sino local con data fake.
En el archivo `.env.example` estan las variables que deben ir para poder llenarlas con sus datos de Firebase.
