import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = resolve('dist');
const port = Number(process.env.PORT || 10000);
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400).end();
    return;
  }

  const filePath = resolve(root, `.${pathname}`);
  if (filePath !== root && !filePath.startsWith(root + sep)) {
    response.writeHead(403).end();
    return;
  }

  try {
    const file = (await stat(filePath)).isDirectory() ? resolve(filePath, 'index.html') : filePath;
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': contentTypes[extname(file)] || 'application/octet-stream' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch (error) {
    if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') {
      console.error(error);
      response.writeHead(500).end();
      return;
    }

    // Las rutas de la aplicación muestran la página principal; los recursos ausentes devuelven 404.
    if (extname(pathname)) {
      response.writeHead(404).end();
      return;
    }
    const body = await readFile(resolve(root, 'index.html'));
    response.writeHead(200, { 'Content-Type': contentTypes['.html'] });
    response.end(request.method === 'HEAD' ? undefined : body);
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`980 Láser disponible en el puerto ${port}`);
});
