const arr = [1,2,3,4,5,6,7,8,9,10]
let first = -Infinity;
let second = -Infinity;
for(let i = 0; i <arr.length; i++){
    if(i > first){
        first = i;
        second = first
    }
}
console.log(second)


console.log(Math.max(...arr))