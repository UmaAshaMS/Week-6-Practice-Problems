// Write a program to find the number of even numbers in an array
const arr = [12,89,56,88,124,53]
let count = 0;
let evenArr = []
for(let i =0; i <= arr.length; i++){
    if(arr[i] % 2 === 0){
        evenArr.push(arr[i]);
        count++;
    }
}
console.log(evenArr)
console.log(count)