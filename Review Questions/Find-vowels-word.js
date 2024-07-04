//Find all vowels in th word
const word = 'Gratification';
/* 
1.vowel collection
2.split into letters letterArray
3.vowelArray = filter( n => vowels.includes(n))

*/


const vowels = ['A','E','I','O','U','a','e','i','o','u'] 
let letterArray = word.split('');
let vowelArray = letterArray.filter( n => vowels.includes(n))
console.log(vowelArray)


// to avoid duplicate vowels
let vowelSet = new Set(letterArray.filter( n => vowels.includes(n)))
console.log(Array.from(vowelSet))