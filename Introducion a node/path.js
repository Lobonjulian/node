const path = require('node:path')

// como se separa las carpetas según el sistema Op 
console.log(path.sep)

// unir rutas con path join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/temp/julitomuxik-23-q/password.txt')
console.log(base)

// para obtener la extension de un archivo
const extension = path.extname('password.txt.png')
console.log(extension)