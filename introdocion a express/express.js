const express = require("express");
const ditto = require("./pokemon/ditto.js");

const PORT = process.env.PORT ?? 3000;

const app = express();
app.disable("x-powered-by");

app.use(express.json());
// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();

//   let body = "";
//   //escucha el evento del data
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     req.body = data;
//     next();
//   });
// });

app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("Pagina no encontrada");
});

app.listen(PORT, () => {
  console.log(`Servidor express en el puerto http://localhost:${PORT}`);
});
