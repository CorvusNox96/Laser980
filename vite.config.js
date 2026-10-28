import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { routes } from './src/routes.js';

// Emit each public URL as a real HTML entry for static hosting and direct reloads.
function pageEntries() {
  let outputDirectory;
  return {
    name: 'static-page-entries',
    apply: 'build',
    configResolved(config) { outputDirectory = resolve(config.root, config.build.outDir); },
    closeBundle() {
      const template = readFileSync(resolve(outputDirectory, 'index.html'), 'utf8');
      for (const route of routes) {
        const directory = resolve(outputDirectory, `.${route.path}`);
        mkdirSync(directory, { recursive: true });
        const html = template.replace(/<title>.*?<\/title>/, `<title>${route.title} | 980 Laser</title>`)
          .replace(/(<meta name="description" content=")[^"]*("\s*\/>)/, `$1${route.description}$2`);
        writeFileSync(resolve(directory, 'index.html'), html);
      }
      writeFileSync(resolve(outputDirectory, '404.html'), template.replace(/<title>.*?<\/title>/, '<title>Página no encontrada | 980 Laser</title>'));
    },
  };
}

export default defineConfig({
  plugins: [react(), pageEntries()],
});
