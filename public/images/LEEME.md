# Imágenes de la landing

Coloca aquí tus archivos con **estos nombres** (o edita las rutas en `src/config/assets.js`).

| Archivo | Uso | Recomendación |
|---------|-----|----------------|
| `logo.svg` o `logo.png` | Header y footer | Fondo transparente, ancho ~200–400px |
| `hero.jpg` | Foto grande del hero | Horizontal, mín. 1400×900 px |
| `galeria-1.jpg` … `galeria-6.jpg` | Galería de producto | Cuadrado o 4:3, buena luz |

## Logo propio

1. Sustituye `logo.svg` por tu archivo, **o**
2. Añade `logo.png` y en `src/config/assets.js` cambia:
   ```js
   logo: '/images/logo.png',
   showLogoText: false,  // si el logo ya trae el nombre
   ```

## Fotos

Copia tus JPG/WebP con los nombres de la tabla. Al guardar, recarga el navegador (`npm run dev`).

Si usas otros nombres, actualiza el array `gallery` y la ruta `hero` en `assets.js`.
