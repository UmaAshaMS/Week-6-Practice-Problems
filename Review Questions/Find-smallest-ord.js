//smallest word in a string

const str = 'Rain is coming';

/* 
1.split to array
2.lengthArray - map()
3.minLength - Maths.min()
4.smallword - find() 
*/

let arr = str.split(' ');
console.log(arr)

// let len = arr.forEach((ele) => {console.log(ele.length)})
// console.log('...............................................')

let lengthArray = arr.map((ele) => ele.length);
let minLength = Math.min(...lengthArray);

let smallWord = arr.find(ele => ele.length === minLength)
console.log(smallWord)