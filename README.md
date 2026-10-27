# 980 Laser

Página de inicio del centro de estética y bienestar 980 Láser, en La Habana, con React y Vite.

## Requisitos

Node.js 22.12 o superior y npm.

## Desarrollo

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
npm run preview
```

La compilación genera los archivos estáticos en `dist/`.

## Estructura

```text
public/             Archivos públicos sin procesar
src/
  assets/images/    Imágenes importadas desde React
  components/       Componentes reutilizables
  pages/Home.jsx    Página principal
  styles/global.css Estilos generales
  App.jsx           Componente raíz
  main.jsx          Entrada de React
index.html          Documento HTML principal
vite.config.js      Configuración de Vite
```

## Contenido de la primera versión

Encabezado con menú móvil, presentación, servicios desplegables, información del centro, proceso de atención, espacio para testimonios, preguntas frecuentes y contacto.

- El logo provisional está en `public/logo-980.png`; puede sustituirse conservando el nombre.
- Los textos, servicios y enlaces de imágenes están en `src/pages/Home.jsx`.
- Los colores y la adaptación a móvil están en `src/styles/global.css`.
- Las fotografías de ambientación se cargan desde Unsplash y las fuentes desde Google Fonts, por lo que requieren conexión. No representan instalaciones, personal ni resultados de 980 Láser.
- Los testimonios, teléfono, dirección exacta y horarios están pendientes de información real. No se envían reservas ni se recopilan datos personales.

Referencias de organización y presentación: https://dermacelaserclinic.ca/ y https://lasersinmedicine.com.au/. El contenido de servicios procede de la descripción de 980 Láser.
