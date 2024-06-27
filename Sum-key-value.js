const arr = [{a:1,b:11},{c:2,d:22}]
let sum = 0;
arr.forEach((obj) => {
    Object.values(obj).forEach((val) => {
        sum += val
    })
})
console.log(sum)