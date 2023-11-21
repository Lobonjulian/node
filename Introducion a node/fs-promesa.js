const fs = require('node:fs/promises');
 
// promesa
console.log('--------Promises------------')
console.log('leyendo el archivo 1')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
})

console.log('realizando tareas asincronas')

console.log('leyendo el archivo 2')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
})


///estos es para modulos nativos 
//que no tienen promesas nativas 

//const { promisify } = requiere('node:util');
// const readFilePromise = promisify(fs.readFile);