const z = require("zod");

const movieSchema = z.object({
  title: z.string(),
  year: z.number().int().max(2024).min(1900),
  director: z.string(),
  duration: z.number(),
  genre: z.array(z.enum(["Action", "Drama", "Comedy", "Horror", "Crime"])),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url(),
});

function validationMovies(object) {
  return movieSchema.safeParse(object);
}

function validationpartialMovie(input) {
  return movieSchema.partial().safeParse(input);
}

module.exports = { validationMovies, validationpartialMovie };
