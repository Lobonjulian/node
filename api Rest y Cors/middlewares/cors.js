import cors from "cors";

const ACCEPTED_ORIGINS = [
  "http://localhost:8080",
  "http://localhost: 3000",
  "https://movies.com",
  "https://mimovies.com/",
];

/**
 * Generate a CORS middleware function that checks the origin of incoming requests.
 *
 * @param {object} options - Optional configuration options for the CORS middleware.
 *   @param {array} options.acceptedOrigins - An array of accepted origins for requests. Defaults to ACCEPTED_ORIGINS.
 * @return {function} - The CORS middleware function.
 */
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS} = {})  => cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("no permitido por CORS"));
    },
  });