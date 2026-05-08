# Project Break Dashboard

Es un dashboard web interactivo que reúne varias herramientas útiles en una interfaz moderna con diseño glassmorphism.

## Descripción

Proyecto desarrollado con HTML, CSS y JavaScript.

El objetivo principal es crear un panel de control modular donde diferentes utilidades funcionan tanto de forma independiente como integradas dentro de una página principal.

## URL

https://j-mateo.github.io/project-break-dashboard/

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- WeatherAPI

## Funcionalidades

### Reloj digital

- Muestra la hora actual en formato 24 horas
- Actualiza la hora automáticamente
- Muestra la fecha actual
- Incluye mensajes personalizados según la franja horaria

### Estación meteorológica

- Consulta información meteorológica mediante una API externa
- Muestra ciudad, país, estado del clima y temperatura
- Incluye datos como humedad, viento y precipitaciones
- Muestra previsión por horas de una ciudad predefinida

### Generador de contraseñas

- Genera contraseñas seguras de forma aleatoria
- Permite seleccionar la longitud de la contraseña
- Incluye letras mayúsculas, minúsculas, números y símbolos

### Gestor de enlaces

- Permite añadir enlaces personalizados
- Guarda los enlaces en LocalStorage
- Mantiene los datos aunque se recargue la página
- Permite eliminar enlaces guardados

### Fondos dinámicos

- Cambia la imagen de fondo de forma automática
- Utiliza imágenes aleatorias para dar más dinamismo a la interfaz

## Diseño

- Estilo glassmorphism
- Interfaz moderna y visual
- Componentes organizados en tarjetas
- Animaciones suaves
- Jerarquía visual clara

## Mejoras de accesibilidad

- Uso de `aria-live` en elementos que se actualizan dinámicamente.
- Uso de `role="status"` para mensajes de estado.
- Textos `alt` descriptivos en iconos meteorológicos.
- Estados `focus` visibles para navegación con teclado.
- Uso semántico de listas en el gestor de enlaces.

## Responsive

La interfaz está adaptada para ofrecer una visualización correcta en escritorio, tablet y dispositivos móviles.

## Estructura del proyecto

```text
project-break-dashboard/
│── css/
│   ├── reset.css
│   └── style.css
│
│── img/
│   ├── favicon.svg
│   └── photos-fondo.js
│
│── js/
│   ├── templates/
│   │   └── template.js
│   ├── background.js
│   ├── clock.js
│   ├── links.js
│   ├── main.js
│   ├── password.js
│   └── weather.js
│
│── clock.html
│── index.html
│── links.html
│── password.html
│── weather.html
│── readme.md

## Autor

Desarrollado por J-Mateo