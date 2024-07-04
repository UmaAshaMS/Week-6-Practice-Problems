const arr = [1,3,4,6,7,8,2]

// Use filter() if num < 3 then it is prime, else go for loop(i*i<num)
let prime  = arr.filter((n)=> {
    if(n === 2 || n ===3 ){
        return true
    }
    else{
        for(let i = 2; i * i < n; i++){
            if(n % i != 0){
                return true
            }
        }
    }
})
console.log(prime)