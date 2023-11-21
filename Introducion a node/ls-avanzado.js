const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require('picocolors')  

const folder = process.argv[2] ?? ".";

async function ls (folder) {
  let files 
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(`error al leer el directorio: ${folder}`);
    process.exit(1)
  }

  const filesPromises = files.map(async files => {
    const filepath = path.join(folder, files)
    let stats 

    try{
      stats = await fs.stat(filepath) //-> para informacion de los archivos
    } catch {
      console.error(`error al leer el directorio: ${filepath}`);
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? "d" : "f"
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return`${pc.cyan(fileType)} ${fileSize.toString().padStart(10)} ${fileModified} ${pc.blue(files.padEnd(20))}`
  })

  const fileInfo = await Promise.all(filesPromises)
  fileInfo.forEach(fileInfo => console.log(fileInfo)) 
}

ls(folder)