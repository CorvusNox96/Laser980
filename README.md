# 980 Laser

Sitio con páginas independientes del centro de estética y bienestar 980 Láser, en La Habana, con React y Vite.

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

Las fotos originales del equipo y el tratamiento se guardan en `assets/source-images/`. Antes de `npm run dev` y `npm run build`, `scripts/optimize-images.mjs` crea automáticamente versiones WebP ligeras en `public/optimized/`. Para actualizar una foto, reemplaza el original con el mismo nombre; no hace falta comprimirlo a mano. La carpeta generada no se guarda en Git.

## Despliegue en Render como sitio estático

Selecciona el repositorio `CorvusNox96/Laser980` y la rama `main`. Deja Root Directory vacío.

- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`

Render publica directamente los archivos generados en `dist/`.

## Solicitudes de cita

La página `/contacto/` reúne el teléfono, WhatsApp, correo y una referencia provisional de ubicación. El formulario envía las solicitudes a `980lasser@gmail.com` mediante FormSubmit, con el asunto «Nueva solicitud de cita | 980 Laser». Para activarlo, envía una solicitud de prueba desde la página publicada y confirma el correo de activación que recibirá esa cuenta. Hasta completar esa confirmación no se entregarán las solicitudes. El formulario solicita solo datos de contacto, servicio de interés y preferencias para coordinar la cita; no confirma una reserva automáticamente.

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

Encabezado con menú móvil, presentación, páginas de servicios, información del centro, proceso de atención, espacio para testimonios, preguntas frecuentes y contacto.

- El logo en `public/logo-980-tipografia.png` contiene «980 TRATAMIENTOS LASER» sobre fondo transparente. Se utiliza en el encabezado, el pie y la pestaña del navegador. En la página, una sombra CSS sigue el contorno de las letras y los números.
- Los textos, servicios y enlaces de imágenes están en `src/pages/Home.jsx`.
- Los colores y la adaptación a móvil están en `src/styles/global.css`.
- Las fotografías de ambientación se cargan desde Unsplash y las fuentes desde Google Fonts, por lo que requieren conexión. No representan instalaciones, personal ni resultados de 980 Láser.
- Los testimonios, teléfono, dirección exacta y horarios están pendientes de información real. No se envían reservas ni se recopilan datos personales.

Referencias de organización y presentación: https://dermacelaserclinic.ca/ y https://lasersinmedicine.com.au/. El contenido de servicios procede de la descripción de 980 Láser.

## Navegación y páginas

Por ahora se definen siete páginas. Las páginas nuevas contienen solo su encabezado; su contenido se desarrollará posteriormente.

- Inicio: `src/pages/Home.jsx`, ruta `/`.
- Servicios (menú desplegable, sin página propia):
  - Equipamientos: `Equipment.jsx`, ruta `/servicios/equipamientos/`.
  - Separador visual.
  - Capilares y vasos superficiales: `Capillaries.jsx`, ruta `/servicios/capilares/`.
  - Cuidado de uñas: `NailCare.jsx`, ruta `/servicios/unas/`.
  - Cuidado de la piel: `SkinCare.jsx`, ruta `/servicios/piel/`.
- Preguntas frecuentes: `Faq.jsx`, ruta `/preguntas-frecuentes/`.
- Nosotros (al final): `About.jsx`, ruta `/nosotros/`.

Todos los archivos de página están en `src/pages/`. `NotFound.jsx` es la vista auxiliar para direcciones inexistentes. `src/routes.js` define rutas y metadatos. El sitio se sirve desde la raíz del dominio y genera un HTML por ruta para alojamiento estático.
