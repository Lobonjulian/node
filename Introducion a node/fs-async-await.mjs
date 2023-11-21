import { readFile } from 'node:fs/promises';
 

console.log('--------async await callback------------')

console.log('leyendo el archivo 1')
const texto = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto: ', texto)

console.log('realizando tareas asincronas')

console.log('leyendo el archivo 2')
const segundotexto = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto: ', segundotexto)