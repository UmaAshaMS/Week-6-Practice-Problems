const arr = [1,2,3,4,5,6,1,2,3]

// unique num = 4,5,6
const uniqueArr = []

const countMap = {}
arr.forEach((elements) => {
    if(countMap[elements]){
        countMap[elements]++;
    }
    else{
        countMap[elements] = 1
    }
})

console.log(countMap);
for(keys in countMap){
    if(countMap[keys] === 1){
        uniqueArr.push(keys)
    }
}
console.log('Unique elements are : '+ uniqueArr)
