const obj = {"a":[1,2,3],"b":1,"c":5,"d":[10,20]};
let sum = 0;
for(let n in obj){
    if(Array.isArray(obj[n])){
        sum = sum + obj[n].reduce( (a,c) => a+c)
    }
    else{
        sum = sum + obj[n]
    }
}
console.log(sum)