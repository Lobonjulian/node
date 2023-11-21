// js --> por defecto utiliza CommonJS
// mjs --> por defecto utiliza ECMAScript
// .cjs --> para  utilizar CommonJS

import { suma, resta, mult } from "./suma.mjs";

console.log(suma(1, 2));
console.log(resta(1, 2));
console.log(mult(1, 2));