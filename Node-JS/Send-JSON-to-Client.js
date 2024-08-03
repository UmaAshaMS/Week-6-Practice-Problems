const http = require('http')
const server = http.createServer( (req,res) => {
    res.writeHead(200, {'Content-Type' : 'application/JSON' })
    const myObj = {name:'Uma', week:6}
    res.end(JSON.stringify(myObj))
}).listen(3003, ()=> {
    console.log('Server created and JSON data send')
})