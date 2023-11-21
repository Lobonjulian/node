const fs = require('node:fs');
 
//sincrono
console.log('leyendo el archivo 1')
const texto = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(texto)
console.log('realizando tareas sincronas')


console.log('leyendo el archivo 2')
const segundotexto = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log(segundotexto)

// asincrono
console.log('--------asincronia------------')
console.log('leyendo el archivo 1')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primer texto:', text)
})

console.log('realizando tareas asincronas')

console.log('leyendo el archivo 2')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto:', text)
})