const fs = require('fs')

const writeStream = fs.createWriteStream('output.txt')

writeStream.write('hellooo')
writeStream.on('end', ()=>{
    console.log('Finished writing')
})