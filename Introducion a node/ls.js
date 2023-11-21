const fs = require('fs');

fs.readdir('./', (err, files) => {
  if (err) {
    console.error('error al leer el directorio:', err)
    return;
  }
  files.forEach(files => {
    console.log(files)
  })
})