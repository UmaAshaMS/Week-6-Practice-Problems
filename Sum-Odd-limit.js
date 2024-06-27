// Write a program to find the sum of all the odd numbers for a given limi
const limit = 10;
let sum = 0;
for(let i = 1; i <= 10; i++){
    if(i % 2 != 0){
        sum += i
}
}
console.log(sum)