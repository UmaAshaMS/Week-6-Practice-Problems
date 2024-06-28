//move all 0's to the end of it while maintaining the relative order of the non-zero elements.
nums = [0,9,12,0,34,0];

//iterate from the end
for(let i = nums.length-1; i >= 0; i--){
    if(nums[i] === 0){
        nums.splice(i,1);
        nums.push(0)
    }
}
console.log(nums)