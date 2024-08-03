const objPrototype = {
    name : 'ujjug',
    greet : function(){
        console.log(`Heloo my name is ${this.name} and my age is ${this.age}`)
    }
}

const person1 = Object.create(objPrototype)
//person1.name = 'asvf'
person1.age = 34
person1.greet()
