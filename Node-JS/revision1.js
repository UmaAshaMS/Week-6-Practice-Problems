// //create a server
// // const http = require('http')

// // const server = http.createServer((req,res) => {
// //     console.log(req.url)
// //    res.writeHead(200, {'Content-Type':'text/plain'})
// //     res.write('Hello')
// //     res.end()
// // })

// // const port = 3002
// // server.listen(port);
// // console.log(`Server created at ${port}`) 

// //create a file 
// //data written to the file should be in string format
// const fs = require('fs')

// const data = 'Hello World'
// fs.writeFile('source.txt', data,'utf-8', (err) => {
//     if(err){
//         console.error(err)
//     }
//     console.log('Written')
// })

// function numbers(){
//     let i = 0
//     let result = ''
//     while(i <= 10){
//         console.log(i)
//         result += i
//         i++
//     }
//     return result
// }

// numdata = numbers()
// fs.writeFile('file1.txt', numdata, 'utf-8', (err)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
    

// })

// fs.readFile( 'file1.txt', 'utf-8', (err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(data)
// })

// fs.unlink('')





const fs = require('fs')
let data = (function(){
    let n = 0
    const arr = []
    while(n<10){
        arr.push(n)
        n++
    }
    return arr
})()

fs.writeFile('output.txt', data.toString(), 'utf-8', (err)=> {
    if(err){
        console.error(err)
    }
    console.log('Written')
})


// fs.readFile('output.txt', 'utf-8', (err,data)=> {
//     if(err){
//         console.error(err)
//     }
//     console.log(data)
//     //console.log("Read File")
// })