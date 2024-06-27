const arr = [1,2,3,4,5,6,7,8]

// function isPrime(num){
//     for(let i = 2; i*i <= num; i++){
//         if(num % i === 0){
//             return true;
//         }
//     }
// }

const elements = arr.filter((num) => {
    if ( num <= 2 || num <= 3){
        return true;
    }
    for(let i = 2 ; i*i <= num; i++){
        if(num%i != 0){
            return true;
        }
    }
})
console.log(elements)