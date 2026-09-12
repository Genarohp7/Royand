# Royand

Primera implementación web de Royand: landing corporativa estática construida con Vite, React y TypeScript.

## Desarrollo local

```bash
npm install
npm run dev
```

## Validación

```bash
npm run lint
npm run build
```

La configuración de Vite usa `base: '/Royand/'` para publicar correctamente en GitHub Pages bajo el repositorio `Royand`.

## GitHub Pages

El workflow de GitHub Actions incluido compila el sitio con `npm run build` y publica la carpeta `dist` en GitHub Pages.
