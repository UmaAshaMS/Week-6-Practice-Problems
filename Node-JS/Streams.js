const fs = require('fs')
const readStream = fs.createReadStream('source.txt')
const writeStream = fs.createWriteStream('destination.txt');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

readStream.on('end', (chunk) => {
    writeStream.end();
})