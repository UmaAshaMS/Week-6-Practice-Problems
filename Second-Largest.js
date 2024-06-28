const nums = [1,2,3,4,5,6,7,8,8]
var secondLargest = function(nums){
    let first =  -Infinity;
    let second = -Infinity;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > first){
            second = first;
            first = nums[i]; 
        }
    }
    return second;
}

console.log(secondLargest(nums))