//Write a program to interchange the values of two arrays.
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
let temp = 0;
for(let i = 0; i < arr1.length; i++){
    temp = arr1[i];
    arr1[i] = arr2[i];
    arr2[i] = temp

}
console.log(arr1)
console.log(arr2)