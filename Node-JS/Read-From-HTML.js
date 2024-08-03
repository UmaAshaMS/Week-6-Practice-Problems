const http = require('http')
const fs = require('fs')
const server = http.createServer( (req,res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('index.html', 'utf-8', (err,data)=>{
        if(err){
            res.write(err)
        }
        res.write(data)
        res.end()
    });
}).listen(4001,()=> console.log('Server UP!'))