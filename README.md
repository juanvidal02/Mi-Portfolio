# Portfolio — Juan Antonio Vidal López

Sitio personal estático hecho con **Astro 7** y **Tailwind CSS 4**. Sin JavaScript en el
navegador, todo HTML generado en build.

## Comandos

| Comando               | Acción                                                    |
| :-------------------- | :-------------------------------------------------------- |
| `npm install`         | Instala dependencias                                       |
| `npm run dev`         | Servidor de desarrollo en `http://localhost:4321`         |
| `npm run build`       | Genera el sitio estático en `./dist/`                     |
| `npm run preview`     | Previsualiza el build de producción                       |
| `npm run og-image`    | Regenera `public/og-image.jpg` (imagen para redes)        |

> Para el servidor en segundo plano: `npx astro dev --background`, y se gestiona con
> `npx astro dev status` / `stop` / `logs`.

## Estructura del proyecto

```text
mi-portfolio/
├── public/                     # Archivos servidos tal cual, sin procesar
│   ├── favicon.svg
│   ├── favicon.ico
│   └── og-image.jpg            # Imagen de vista previa (npm run og-image)
├── scripts/
│   └── make-og-image.mjs       # Genera og-image.jpg a partir de tu foto
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── mi-foto.jpeg    # TU FOTO (origen de la web)
│   ├── components/             # Piezas visuales reutilizables
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Icon.astro
│   │   ├── ProfilePhoto.astro  # La foto, optimizada por Astro
│   │   ├── ProjectCard.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── data/
│   │   └── portfolio.ts        # ⭐ TODO el contenido editable está aquí
│   ├── layouts/
│   │   └── BaseLayout.astro    # <head>, SEO, fuentes, tipografía del body
│   ├── pages/
│   │   └── index.astro         # Solo compone: header + secciones + footer
│   └── styles/
│       └── global.css          # Tailwind + fuente y estilos base
└── astro.config.mjs
```

## ¿Dónde edito el contenido?

**En un solo archivo: `src/data/portfolio.ts`.**

| Quiero cambiar…            | Dónde                                              |
| :------------------------- | :------------------------------------------------- |
| Mi nombre, rol o resumen   | `profile`                                          |
| Los enlaces del menú       | `navigation`                                       |
| Las tecnologías            | `skills` (el color de cada una va en `accent`)     |
| Los proyectos              | `projects`                                         |
| Email, GitHub, LinkedIn    | `socials`                                          |
| Título y descripción de SEO| `src/layouts/BaseLayout.astro`                     |
| Colores y tipografía       | `src/styles/global.css`                            |

## La foto

`src/assets/images/mi-foto.jpeg` es el archivo original. `src/components/ProfilePhoto.astro`
lo importa con `astro:assets`, y en cada build Astro:

- la recorta a cuadrado (parte de arriba, para no cortar la cabeza),
- genera dos tamaños (288 px y 576 px) con `srcset`,
- la convierte a **WebP**: de 2,7 MB a unos 8 KB,
- la marca como `priority` para que cargue al instante.

Para cambiar el encuadre, edita `position` en `ProfilePhoto.astro` (`top`, `center`, `bottom`).
La misma foto se reutiliza para generar `public/og-image.jpg` con `npm run og-image`.

> Las imágenes **van siempre en `src/assets/`**, nunca en `public/`. Solo en `public/` lo que
> no necesita procesarse (favicon, `robots.txt`, `og-image.jpg`).

## Despliegue

Pensado para **Vercel** o **GitHub Pages**: el build es estático, así que basta con subir la
carpeta `dist/`. Para Vercel, detecta el framework automáticamente; no hace falta configuración.
