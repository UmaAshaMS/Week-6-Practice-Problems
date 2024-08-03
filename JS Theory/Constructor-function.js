function Animal(name,breed){
    this.name = name
    this.breed = breed

    this.details = function(){
        console.log(`${this.name} is of ${this.breed} breed.`)

    }
}

const obj1 = new Animal('bruno','dash')
obj1.details()