const arr1 = [1,2,3,4]
const arr2 = [1,2,5,6]
let arr3 = [];

for(let ele of arr1){
    if(!arr2.includes(ele)){
        arr3.push(ele)
    }
}

for(let ele of arr2){
    if(!arr1.includes(ele)){
        arr3.push(ele);
    }
}

console.log(arr3);



