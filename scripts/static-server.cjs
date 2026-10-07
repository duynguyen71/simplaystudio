const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs/promises");

// The fallback is only enabled while rendering routes from the original CRA shell.
// Validation uses actual files and real 404 responses, like GitHub Pages.
async function serveBuild(directory, { fallback = false } = {}) {
  const root = path.resolve(directory);
  const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml" };
  const server = http.createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
      let file = path.resolve(root, `.${pathname}`);
      if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
        response.writeHead(403).end();
        return;
      }
      let status = 200;
      try {
        if ((await fs.stat(file)).isDirectory()) {
          if (!pathname.endsWith("/")) {
            response.writeHead(301, { Location: `${pathname}/${new URL(request.url, "http://localhost").search}` }).end();
            return;
          }
          file = path.join(file, "index.html");
        }
        await fs.access(file);
      } catch {
        file = path.join(root, fallback ? "index.html" : "404.html");
        status = fallback ? 200 : 404;
      }
      response.writeHead(status, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
      response.end(await fs.readFile(file));
    } catch {
      response.writeHead(500).end();
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  return {
    url: `http://127.0.0.1:${server.address().port}`,
    close: () => new Promise((resolve) => server.close(resolve)),
  };
}

module.exports = { serveBuild };
