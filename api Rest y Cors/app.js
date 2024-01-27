import express, { json } from "express";
// import { corsMiddleware } from "../middlewares/cors.js";
import { moviesRouter } from "../routes/movies.js";

const app = express();
app.use(json());
app.disable("x-powered-by"); 
app.use("/movies", moviesRouter)

//interactuar con el servidor con el puerto 3000
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`este es tu puerto http://localhost:${PORT}`);
});

