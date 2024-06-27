const arr = [1,2,3,4,5,6,7,8]
function largest(arr){
    let large = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > large){
            large = arr[i]
        }
    }
    return large
}

console.log(largest(arr))

