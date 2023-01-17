import http from "http";

const server = {};

server.httpServer = http.createServer((req, res) => {
  const baseURL = `http${req.socket.encryption ? "s" : ""}://${req.headers.host
    }`;
  const parsedURL = new URL(req.url, baseURL);
  const httpMethod = req.method.toLowerCase();
  const parsedPathName = parsedURL.pathname;
  const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, "");
  const header = req.headers;

  req.on("data", () => {
    console.log("Klientas atsiunte duomenu...");
  });
  req.on("end", () => {
    // failo turinys:
    // - tekstiniai failai: css, js ir kiti tekstiniai failai;
    // - binary failai: nuotraukos, video, pdf;
    // API 
    // puslapio HTML

    const textFileExtensions = ['css', 'js', 'svg'];
    const binaryFileExtensions = ['png', 'jpg', 'ico'];
    const isTextFile = false;
    const isBinaryFile = false;
    const isAPI = false;
    const isPage = !isTextFile && !isBinaryFile && !isAPI;

    let responseContent = '';

    if (isTextFile) {
      responseContent = 'TEXT FILE CONTENT';
    }
    if (isBinaryFile) {
      responseContent = 'BINARY FILE CONTENT';
    }
    if (isAPI) {
      responseContent = 'API FILE CONTENT';
    }
    if (isPage) {
      responseContent = 'PAGE HTML CONTENT';
    }


    res.end('ATSAKYMAS')
  });
});

server.routes = {
  "": "home HTML",
  '404': "404 HTML",
  'register': "register HTML",
  'login': "login HTML",
  'blog': "blog list HTML",
  'services': 'services list HTML'
};

server.init = () => {
  console.log("Bandau paleisti serverio procesa...");
  const port = 3777;
  server.httpServer.listen(port, () => {
    console.log(`Tavo serveris sukasi ant http://localhost:${port}`);
  });
};

export { server };
