/* 
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
 1.str - array num
2.sum 
3.sum - binary 

a = "1010", b = "1011"
*/
/*To handle such large binary numbers accurately in JavaScript,
we should approach it differently, possibly treating the binary strings directly without converting to decimal and back. 
Here's how you can modify your function to handle large binary strings correctly:

var addBinary = function(a, b) {
    function BinaryToDecimal(binaryString){
        let arr = Array.from(binaryString, Number)
        let num = 0;
        for(let i = 0; i < arr.length; i++){
            num = num + arr[i] * (Math.pow(2, arr.length - 1 -i));
        }
        return num
    }
    let sum = BinaryToDecimal(a)+BinaryToDecimal(b)
    return sum.toString(2)
};

console.log(addBinary('1010','1011')) 
*/

