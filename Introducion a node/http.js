const http = require("node:http");

const disponiblePort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("recibiendo peticion");
  res.end("hola mundo");
});

// server.listen(0, () => {
//   console.log(
//     `este puesto esta listo para ti http://localhost:${server.address().port}`
//   );
// });

server.listen(disponiblePort, () => {
  console.log(
    `este puerto esta listo para ti http://localhost:${disponiblePort}`
  );
});
