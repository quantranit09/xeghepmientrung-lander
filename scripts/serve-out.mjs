import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function insideOutDir(filePath) {
  const relative = path.relative(outDir, filePath);
  return Boolean(relative) && !relative.startsWith("..") && !path.isAbsolute(relative);
}

function candidateFiles(pathname) {
  const safePath = decodeURIComponent(pathname).replace(/^\/+/, "");
  const base = path.join(outDir, safePath);

  if (pathname === "/") return [path.join(outDir, "index.html")];
  if (path.extname(base)) return [base];

  return [`${base}.html`, path.join(base, "index.html")];
}

function sendFile(response, filePath, statusCode = 200) {
  if (!insideOutDir(filePath)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  const ext = path.extname(filePath);
  response.writeHead(statusCode, {
    "Content-Type": contentTypes[ext] || "application/octet-stream",
  });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);
  const pathname = url.pathname;

  if (pathname.endsWith(".html") && pathname !== "/404.html") {
    response.writeHead(301, {
      Location: pathname.replace(/\.html$/, "") || "/",
    });
    response.end();
    return;
  }

  const filePath = candidateFiles(pathname).find((candidate) => {
    return insideOutDir(candidate) && fs.existsSync(candidate) && fs.statSync(candidate).isFile();
  });

  if (filePath) {
    sendFile(response, filePath);
    return;
  }

  const notFoundFile = path.join(outDir, "404.html");
  if (fs.existsSync(notFoundFile)) {
    sendFile(response, notFoundFile, 404);
    return;
  }

  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Not found");
});

server.listen(port, host, () => {
  console.log(`Serving static export from ${outDir}`);
  console.log(`Local:   http://localhost:${port}`);
  console.log(`Network: http://${host}:${port}`);
});
