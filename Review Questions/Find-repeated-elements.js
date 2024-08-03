arr1 = [1,2,3,3,2,4,5,6,5,6]

/*
1.new array to store the duplicate elements
2.countMap to have count as elements as key and count as values
3.countMap[n] means count of n 
4.push keys to new array if countMap[keys] > 1 


*/
dup = []
let countMap = {}
arr1.forEach( (n) => {
    if(countMap[n]){
        countMap[n]++;
    }
    else{
        countMap[n] = 1
    }
});
console.log(countMap)
for(let keys in countMap){
    if(countMap[keys] > 1){
        dup.push(parseInt(keys));
    }
}

console.log(dup)
//*****************************************************************************************
const arr = [1,2,3,3,2,4,5,6,5,6,6,7,7,8,9,9,9,9]
const out = arr.reduce( (acc,curr) => {
    if(acc[curr]){
        acc[curr]++
    }
    else{
        acc[curr] = 1
    }
    return acc
},{})
console.log(out)
dup = []
for(key in out){
    if(out[key] === 1){
       dup.push(key) 
    }
}
console.log(dup)


