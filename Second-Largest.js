const arr = [1,2,3,4,5,6,7,8,8]
let sortedArr = arr.sort((a,b) => b-a)
for(let i = 1; i < sortedArr.length; i++){
    let large = sortedArr[0];
    if(sortedArr[i] != large){
        secLarge = sortedArr[i]
    }
}
console.log(secLarge);