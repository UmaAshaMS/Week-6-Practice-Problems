const nums = [1,2,3,4,5,6,7,8,9,10]
let sum = nums.reduce( (a, b) => {
    return a + b;
})
console.log(`Sum = ${sum}`);
const avg = sum / (nums.length);
console.log(avg)