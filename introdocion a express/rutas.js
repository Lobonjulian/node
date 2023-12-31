const http = require("node:http");

const dittoJSON = require("./pokemon/ditto");

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>no se encontró la ruta 404</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon":
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            res.writeHead(201, {
              "Content-type": "application/json; charset=utf-8",
            });

            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });

          break;
      }
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      return res.end("no se encontró la ruta 404");
  }
};

const server = http.createServer(processRequest);
server.listen(3002, () => {
  console.log("servicio en el puerto http://localhost:3002");
});
