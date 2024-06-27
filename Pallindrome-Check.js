// const num = 12321;
// numString = num.toString()
// console.log(numString)
// revString = numString.split('').reverse().join('')
// if(numString === revString){
//     console.log("Pallindrome")
// }
// else{
//     console.log("Not")
// }

function isPallindrome(num){
    str = num.toString();
    revStr = str.split('').reverse().join('');
    if(str === revStr){
        return 'Pallindrome';
    }
    else{
        return 'Not a Pallindrome';
    }
}

console.log(isPallindrome(121));