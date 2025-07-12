# Guía Práctica para Actualizar Contenido

Este documento es un tutorial paso a paso para las tareas de actualización más frecuentes.

## Tarea 1: Añadir una Nueva Expedición (Viaje)

Sigue estos pasos para añadir un nuevo viaje, por ejemplo, **"Malpelo 2026"**.

**Paso 1: Crear el Archivo de la Expedición**

- Ve a la carpeta `src/data/content/experiences/`.
- **Copia y pega** un archivo existente (ej: `exp-sm-sept-2025.js`) para usarlo como plantilla.
- Renombra el nuevo archivo a algo descriptivo, ej: `exp-malpelo-2026.js`.

**Paso 2: Modificar los Datos del Nuevo Archivo**
Abre tu nuevo archivo `exp-malpelo-2026.js` y edita:

- **`id`**: Asigna un ID único y claro. Ejemplo: `'expedicion-malpelo-2026'`.
- **`destinationId`**: Enlaza al `id` de un destino existente. Ejemplo: `'malpelo'`. (Si el destino no existe, debes crearlo primero, ver Tarea 2).
- **Claves de Texto (`...Key`)**: Cambia todas las claves a un formato único para esta expedición para evitar conflictos. Por ejemplo, cambia `expsmsept25Name` a `expmalpelo2026Name`.
- **`details`**: Actualiza las fechas (`startDate`, `endDate`), el precio y cualquier otro detalle específico.
- **Imágenes y URLs**: Reemplaza las URLs de las imágenes y banners.

**Paso 3: Añadir las Traducciones**

- Abre `src/i18n/locals/es/experiences.js` y `src/i18n/locals/en/experiences.js`.
- Al final de cada archivo, añade todas las nuevas claves que creaste en el paso anterior (`expmalpelo2026Name`, `expmalpelo2026DescTitle`, etc.) con sus textos correspondientes en español e inglés.

**Paso 4: Registrar la Nueva Expedición**

- Abre `src/data/content/experiences/_index.js`.
- **Importa** tu nuevo archivo al principio del todo:
  ```javascript
  import { expMalpelo2026 } from './exp-malpelo-2026.js';
  ```
- **Añádelo** al objeto `experiencesById`:
  ```javascript
  'expedicion-malpelo-2026': expMalpelo2026,
  ```
  ¡Listo! El sitio ya mostrará tu nueva expedición automáticamente.

---

## Tarea 2: Añadir un Nuevo Destino

Para añadir un destino que no existe, como **"Malpelo"**.

1.  **Crea el Archivo del Destino:** Ve a `src/data/content/destinations/`, crea `malpelo.js` (usando `santa-marta.js` como plantilla).
2.  **Modifica los Datos y las Claves:** Edita el `id` a `'malpelo'` y actualiza todas las claves de texto (`sm...` a `malpelo...`).
3.  **Añade las Traducciones:** Añade las nuevas claves a `src/i18n/locals/es/destinations.js` y `en/destinations.js`.
4.  **Registra el Destino:** En `src/data/content/destinations/_index.js`, importa el nuevo archivo y añádelo al objeto `destinationsById`.

---

## Tarea 3: Añadir un Nuevo Curso

El proceso es idéntico a los anteriores:

1.  **Crea el Archivo del Curso:** En `src/data/content/courses/`, crea `padi-advanced-diver.js`.
2.  **Modifica Datos y Claves:** Cambia el `id` y las claves de texto (`owd...` a `aowd...`).
3.  **Añade Traducciones:** Añade las nuevas claves a `src/i18n/locals/es/courses.js` y `en/courses.js`.
4.  **Registra el Curso:** En `src/data/content/courses/_index.js`, impórtalo y añádelo a `coursesById`.

> **Buena Práctica:** Antes de añadir una nueva URL de imagen a cualquier archivo de datos, asegúrate de que esté comprimida y optimizada para la web.
