const net = require("node:net");

function puertoDisponible(disponible) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(disponible, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        pueroDisponible(0).then((port) => resolve(port));
      } else {
        reject(error);
      }
    });
  });
}
