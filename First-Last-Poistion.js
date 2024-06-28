/* 
LC : 34
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/
const nums = [5,7,7,8,8,10];
let target = 8;
var searchRange = function(nums, target) {
    firstIndex = -1;
    lastIndex = -1;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] === target){
            if(firstIndex === -1){
                firstIndex = i
            }
            lastIndex = i;
        }
    }
    
    return  [firstIndex,lastIndex];
};

console.log(searchRange(nums,target))
