const http = require("node:http");

const disponiblePort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("bienvenido a mi web");
  } else if (req.url === "/contactos") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("hola rola");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("no se encontro la pagina error 404");
  }
};

const server = http.createServer(processRequest);

server.listen(disponiblePort, () => {
  console.log(
    `este puerto esta listo para ti http://localhost:${disponiblePort}`
  );
});

