// function isPallindrome(num){
//     str = num.toString();
//     revStr = str.split('').reverse().join('');
//     if(str === revStr){
//         return 'Pallindrome'
//     }
// }

const array = [121,131,1221,555,342,777,456]

let elements = array.filter((num) => {
    str = num.toString();
    revStr = str.split('').reverse().join('');
    if(str === revStr){
        return num
    }
})
console.log(elements)