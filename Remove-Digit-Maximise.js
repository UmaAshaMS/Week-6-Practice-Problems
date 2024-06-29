/* 
Pending
LC - 2259
You are given a string number representing a positive integer and a character digit.

Return the resulting string after removing exactly one occurrence of digit from number 
such that the value of the resulting string in decimal form is maximized. 
The test cases are generated such that digit occurs at least once in number.
Input: number = "1231", digit = "1"
Output: "231"
Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
Since 231 > 123, we return "231".
*/

const number = 1231;
const digit = 1
var removeDigit = function(number, digit) {
    
    firstIndex = number.indexOf(digit);
    number.splice(firstIndex,1);
    return number

};
console.log(removeDigit(number, digit))