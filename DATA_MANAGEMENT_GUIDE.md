# Guía para la Gestión de Datos de JustDiveCol

Este documento explica cómo está organizado el contenido del sitio web. Entender esta estructura es clave para poder actualizar la información de manera fácil y segura.

## Filosofía Principal

El contenido (textos, imágenes, fechas) está completamente separado del código de la página. Toda la información se encuentra en la carpeta `src/data`. Esto permite que cualquier persona pueda realizar cambios sin necesidad de tocar la lógica de programación.

## Estructura de la Carpeta `src/data`

La información se divide en tres categorías principales:

### 1. `src/data/global`

Aquí se encuentra la información que se comparte a lo largo de _todo_ el sitio.

- **`footerData.js`**: Los textos del pie de página.
- **`navbarData.js`**: Los enlaces de la barra de navegación.
- **`paymentMethodsData.js`**: La información sobre los métodos de pago.
- **`sharedData.js`**: Contenido que se reutiliza en varias páginas, como las categorías de experiencias.

### 2. `src/data/pages`

Contiene los datos específicos para cada página estática principal.

- **`homeData.js`**: Controla todo el contenido de la página de inicio.
- **`aboutUsData.js`**: Maneja la información de la página "Sobre Nosotros".
- **`experiencesData.js`**: Define la estructura y textos de la página de "Experiencias".
- Y así sucesivamente para las demás páginas (`safetyData.js`, `contactData.js`, etc.).

### 3. `src/data/content`

Esta es la sección más dinámica y el corazón del sitio. Organiza el contenido en "colecciones".

- **`experiences/`**: Contiene un archivo `.js` para cada **experiencia o viaje** que ofrece el sitio.
- **`destinations/`**: Contiene un archivo `.js` para cada **destino** de buceo.
- **`courses/`**: Contiene un archivo `.js` para cada **curso o certificación**.

## El Concepto de "Claves de Traducción" (`...Key`)

Notarás que los archivos de datos casi nunca contienen texto visible directamente. En su lugar, utilizan una **clave de traducción**, que siempre termina en `Key`.

- **Ejemplo:** En `homeData.js`, para el título del héroe, verás `titleKey: 'homeHeroTitle'`.

**¿Por qué funciona así?**
Esta clave actúa como un identificador único. El sistema la usa para buscar el texto correspondiente en la carpeta `src/i18n/locals/`, que contiene las traducciones para cada idioma:

- `src/i18n/locals/es/`: Archivos con los textos en español.
- `src/i18n/locals/en/`: Archivos con los textos en inglés.

> **Regla de Oro:** Para cambiar un texto, primero busca su `...Key` en el archivo de datos correspondiente. Luego, busca esa misma clave en los archivos de traducción (`es/` y `en/`) para editar el texto.
