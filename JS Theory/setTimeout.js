// const idT  = setTimeout( function(){
//     for(let i = 1; i <= 10; i++){
//         console.log(i)
//     }
// },3000)
let i = 1;
const idI = setInterval( ()=> {
    console.log(i);
    i++;
    if( i > 10){
        clearInterval(idI)
    }

},2000)

// const id  = setTimeout( function(){
//     clearInterval(idI)
// },10000)
