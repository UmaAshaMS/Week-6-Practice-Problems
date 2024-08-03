const date = new Date()
console.log(date)


const fs = require('fs')
fs.writeFile('output.txt', date.toString(), 'utf-8',(err)=> {
    if(err){
        console.error(err)
    }
    console.log('date written')
})