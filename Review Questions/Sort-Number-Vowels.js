//Sort words accoding to the number of vowels.
const str = 'Apple Orange Grapes Pineapple Mango Fig'



let vowels = 'AEIOUaeiou'.split('')


let SortVowels = function(str){
    let words = str.split(' '); //str into words
    function CountVowels(word){
        return word.split('').filter( ele => vowels.includes(ele)).length;
    }

    words.sort( (a,b) => CountVowels(a) - CountVowels(b));
    //return words[words.length - 1];
    return words

}
console.log(SortVowels(str))








