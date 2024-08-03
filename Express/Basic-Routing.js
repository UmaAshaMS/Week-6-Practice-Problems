const express = require('express')
const app = express()

const port = 3002

// midleare to serve the static files
//app.use(express.static(path.join(__dirname,public))) 

//applictaion level middleware
function middleware(req,res,next){
    console.log(req.url);
}
app.get('/', middleware, (req,res) => {
    res.send('Hello')
})

app.get('/product/:category' ,(req,res) => {
    res.send(req.params)
})

app.get('/student',(req,res)=>{
    res.send(req.query)
})

app.listen(port, ()=> {
    console.log(`Server created at http://localhost:${port}`)
})