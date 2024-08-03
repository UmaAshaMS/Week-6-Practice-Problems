function details(name,week,callback){
    console.log(`${name} is in week ${week}.`)
    callback('Hello...')
} 

function greet(message){
    console.log(message)
}

details('Uma',6, greet)


//callback as arrow

function profile(name, age, callback){
    console.log(`Name : ${name} and age: ${age}`)
    callback()
}

profile('njnj', 784, ()=>{
    console.log('Callback')
})