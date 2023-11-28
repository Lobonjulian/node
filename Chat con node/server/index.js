import express from "express";
import logger from "morgan";

import { Server } from "socket.io";
import { createServer } from "node:http";

const PORT = process.env.PORT ?? 4000;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {},
});

io.on("connection", (socket) => {
  console.log("nuevo cliente conectado");

  socket.on("disconnect", () => {
    console.log("cliente desconectado");
  });

  socket.on("chat message", (msg) => {
    io.emit("message", msg);
  });
});
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html");
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
