const EventEmitter = require('events')

const myevent = new EventEmitter();


myevent.on('greet' , (data)=> {
    console.log(`An event occured and data is ${data}.`)
})

myevent.emit('greet','DATA')





// const EventEmitter = require('events')
// const myevent = new EventEmitter()

// myevent.on('greet', ()=> {
//     console.log("Event occured")
// })

// myevent.emit('greet')