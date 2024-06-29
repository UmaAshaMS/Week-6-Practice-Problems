/* 
LC-1796
Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.
Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

*/


const s = "dfa12321afd"

var secondHighest = function(s) {
    let NumericArray = [];
    for(let i =0 ; i < s.length; i++){
        if(!isNaN(s[i])){
            NumericArray.push(parseInt(s[i]));
        }
        NumericArray.sort((a,b) => a-b);
    }
    let first = -Infinity;
    let second = -Infinity;
    for(let i = 0; i < NumericArray.length; i++){
        if(NumericArray[i] > first){
            second = first;
            first = NumericArray[i];
        }
    }
    return second === Infinity? -1 : second 
};
console.log(secondHighest(s));

