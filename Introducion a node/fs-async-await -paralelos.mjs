import { readFile } from 'node:fs/promises';

console.log("--------async await paralelos------------");

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, secundText]) => {
  console.log('primer texto:', text);
  console.log('segundo texto:', secundText);
});
