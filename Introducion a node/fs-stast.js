const fs = require('node:fs');

const estado = fs.statSync('./archivo.txt')

console.log(
  estado.isFile(), //si es un fichero
  estado.isDirectory(), // si es un directorio
  estado.isSymbolicLink(), // si es un enlace simbólico
  estado.size, // tamaño en byte
)