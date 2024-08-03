// const myPromise = new Promise((reject, resolve) => {
//     if(10<20){
//         let diff = 10 -2
//         reject(`The operation is rejected and value is ${diff}`)
//     }
//     else{
//         let sum = 10+2
//         resolve(`The operation is resolved and value is ${sum}`)
//     }
// })

// myPromise.then((result)  => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(()=> {
//     console.log('Promise is settled')
// })


// function add(x,y){
//     return new Promise( (reject,resolve) => {
//         if(x < 0 || y < 0){
//             reject('Promise is rejected as Number is less than 0')
//         }
//         else{
//             let sum = x +  y
//             resolve(`Promise is resolved and sum is ${sum}`)
//         }  
//     })
// }

// add(5,-5).then( (result) => {
//     console.log(result)
// })
// .catch( (error) => {console.log(error)})
// .finally(()=> console.log('Promise is settled.'))

