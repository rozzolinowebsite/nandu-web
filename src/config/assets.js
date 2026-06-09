/**
 * Rutas de imágenes en public/images/
 *
 * Sustituye los archivos manteniendo el mismo nombre, o cambia las rutas aquí.
 * Formatos recomendados: logo → PNG/SVG con fondo transparente;
 * fotos → JPG/WebP, mín. 1200px de ancho.
 */
export const ASSETS = {
  /** Logo del header y footer (reemplaza public/images/logo.svg o logo.png) */
  logo: '/images/logo.png',

  /** Pon true solo si usas un isotipo sin texto (ej. solo la pirámide) */
  showLogoText: false,

  /** Foto principal del hero */
  hero: '/images/hero.jpg',

  /** Galería: añade galeria-1.jpg … galeria-6.jpg en public/images/ */
  gallery: [
    {
      src: '/images/galeria-1.jpg',
      alt: 'Estufa pirámide oxidada en terraza',
      caption: 'Terraza · acabado oxidado',
    },
    {
      src: '/images/galeria-2.jpg',
      alt: 'Detalle de estufa pirámide al atardecer',
      caption: 'Jardín · ambiente campo',
    },
    {
      src: '/images/galeria-3.jpg',
      alt: 'Estufa pirámide en evento al aire libre',
      caption: 'Evento · alquiler',
    },
    {
      src: '/images/galeria-4.jpg',
      alt: 'Vista lateral de estufa pirámide',
      caption: 'Detalle · textura oxidada',
    },
    {
      src: '/images/galeria-5.jpg',
      alt: 'Varias estufas pirámide instaladas',
      caption: 'Instalación múltiple',
    },
    {
      src: '/images/galeria-6.jpg',
      alt: 'Estufa pirámide con llama encendida',
      caption: 'En uso · calor y diseño',
    },
  ],
};
