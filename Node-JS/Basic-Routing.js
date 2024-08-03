const http = require('http')
const fs = require('fs')

const server = http.createServer( (req,res) => {
    console.log("Request was made: " + req.url);
    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content_Type':'text/html'})
        fs.readFile('index.html', 'utf-8', (err,data)=> {
            if(err){
                console.error(err)
            }
            res.write(data)
            res.write('Heloooooooooooo')
            res.end()
        })
    }
    else if(req.url === '/about'){
        fs.readFile('about.html', 'utf-8', (err,data)=> {
            if(err){
                console.error(err)
            }
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.write('About page......')
            res.end()
        })
    }
    //JSON values
    else if(req.url === '/api'){
        let data = {name: 'Uma', week:6}
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.write(JSON.stringify(data))
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/plain'})
        res.end('Page Not Found')
    }
    
});

const port = 3000
server.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})