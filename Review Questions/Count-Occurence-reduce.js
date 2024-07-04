const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

countMap = {};
fruits.forEach((ele) => {
    if(countMap[ele]){
        countMap[ele]++;
    }
    else{
    countMap[ele] = 1;
    }
})
console.log(countMap)

// using reduce

