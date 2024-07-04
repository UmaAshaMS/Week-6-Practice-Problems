const arr = [{a:1,b:2}, {a:3,b:4}, {a:5,b:6}]

/*
1.find all the obj
2.find values of the object
3.sum of values
 */
let sum = 0;
arr.forEach( obj => {
    Object.values(obj).forEach((val) => {
        sum += val;
    })
})

console.log(sum)


