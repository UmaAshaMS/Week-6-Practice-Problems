class Animal{
    constructor(name){
        this.name = name
    }
    sound(){
        console.log(`${this.name} makes sound.`)
    }
}

const dog = new Animal('Dog')
dog.sound()