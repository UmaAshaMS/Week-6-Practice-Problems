//Copy duplicate elements into a new array.
// function findDuplicates(arr){}
const arr = [1,2,2,3,3,3,4,4,4,4,5,6,7,6]
    duplicates =[];
    const countMap = {}; 
    //keys as elements and values as count

    arr.forEach((element) => {
        if (countMap[element]){
            countMap[element]++;
        }
        else{
            countMap[element] = 1;
        }
    });
console.log(countMap);
for(keys in countMap){
    if(countMap[keys] > 1){ //checking count / values > 1
        duplicates.push(keys)
    }
}

console.log(duplicates)

