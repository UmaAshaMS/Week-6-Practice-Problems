function* mulThree(){
    for(let i = 1; i <= 10; i++){
        if(i % 3 === 0){
            yield(i);
        }
    }
}

let obj = mulThree();
let result = obj.next();
while(!result.done){
    console.log(result);
    result = obj.next()
}