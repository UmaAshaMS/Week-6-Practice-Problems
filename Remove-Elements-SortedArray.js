/* Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.
Return k. 
LC- 26*/
nums = [1,1,2]
var removeDuplicates = function(nums) {
    uniqueArr = []
    countMap = {};
    nums.forEach((n) => {
        if(countMap[n]){
            countMap[n]++;
        }
        else{
            countMap[n] = 1;
        }
    });
    for(keys in countMap){
        if(countMap[keys] === 1){
            uniqueArr.push(keys)
        }
    }
    return uniqueArr.length;
};
console.log(removeDuplicates(nums))