import express, { json } from "express";
import { randomUUID } from "node:crypto";
import cors from "cors";
// import movies  from "./movies.json" assert { type: "json" };
import { validationMovies, validationpartialMovie } from "./schemas/movies.js";

import { createRequire } from "node:module";
const  requiere = createRequire(import.meta.url);
const movies = requiere("./movies.json");

const app = express();
app.use(json());
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:8080",
        "http://localhost: 3000",
        "https://movies.com",
        "https://mimovies.com/",
      ];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("no permitido CORS"));
    },
  })
);
app.disable("x-powered-by"); // quita la cabecera x-powered-by

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// todos los recursos que sean movies se identifican en la url /movies
// recupera todas las peliculas por categoria u genero
app.get("/movies", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const moviesByGenre = movie.filter((movie) =>
      movie.genre.some(
        (g) => g.toLocaleLowerCase() === genre.toLocaleLowerCase()
      )
    );
    return res.json(moviesByGenre);
  }
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "movie no encontrada" });
});

// metodos Post
app.post("/movies", (req, res) => {
  const result = validationMovies(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  // en base de datos
  const newMovie = {
    id: randomUUID(),
    ...result.data,
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// metodo Delete
app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movieIndice = movies.findIndex((movie) => movie.id === id);

  if (movieIndice === -1) {
    return res.status(404).json({ message: "movie no encontrada" });
  }

  movies.splice(movieIndice, 1);
  return res.json({ message: "movie deleted" });
});

// metodo Patch
app.patch("/movies/:id", (req, res) => {
  const result = validationpartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const movieIndice = movies.findIndex((movie) => movie.id === id);

  if (movieIndice === -1)
    return res.status(404).json({ message: "movie not found" });

  const updateMovie = {
    ...movies[movieIndice],
    ...result.data,
  };

  movies[movieIndice] = updateMovie;

  return res.json(updateMovie);
});

//interactuar con el servidor con el puerto 3000
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`este es tu puerto http://localhost:${PORT}`);
});
