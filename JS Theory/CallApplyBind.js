function one(week,count){
    console.log(`Name is ${this.name} and week is ${week} and attempt is ${count}`)
}

const obj1 = {name:'Uma'}
one.call(obj1,6,6)

function two(week,count){
    console.log(`Age is ${this.age} and week is ${week} and attempt is ${count}`)
}

const obj2 = {age: 88}

const details = [8,8]

two.apply(obj2,details)

const three = one.bind(obj1)
three(9,9)