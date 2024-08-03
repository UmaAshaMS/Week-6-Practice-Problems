const fs  = require('fs');

data = function(n){
    arr = []
    for(let i = 1; i <= n; i++ ){
        arr.push(i)
    }
    return arr;
}(10)

fs.writeFile('source.txt',data.toString(),'utf-8', (error) => {
    if(error){
        console.error('Error',error);
        return;
    }
    console.log('File created')
})

fs.readFile('source.txt', 'utf-8', (error,data) => {
    if(error){
        console.error(error);
    }
    console.log(data)
})

fs.unlink('source.txt', (err)=> {
    if(err){
        console.error(err)
    }
    console.log('Deleted')
})