function add(x){
    return function(y){
        return x+y 
    }
}

const add2 = add(2)
const sum = add2(5)
console.log(sum)


function mul(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}

const mul2= mul(2)
const mul3=mul2(3)
const prod = mul3(4)
console.log(prod)