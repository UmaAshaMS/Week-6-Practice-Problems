const num = 123456
let str = num.toString()
let sum = 0;
let s = str.split('').forEach((n) => sum += parseInt(n))
console.log(sum)