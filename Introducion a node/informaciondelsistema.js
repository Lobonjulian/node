const os = require('node:os');

console.log('Información del sistema Operativo:')
console.log('----------------------------------')

console.log(`Sistema operativo: ${os.platform()}`)
console.log(`Version: ${os.release()}`)
console.log('Arquitectura:', os.arch())
console.log('Cpus:', os.cpus()) // se puede escalar procesos en node
console.log(`Memoria libre: ${os.freemem()/ 1024 /1024}`)
console.log(`Memoria total: ${os.totalmem() / 1024 / 1024}`)
console.log(`Tiempo de usado : ${os.uptime()/60 /60}`)