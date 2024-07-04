const http = require('http')
const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end('Hello')
})

server.listen( 3000, ()=> {
    console.log('Server created')
})