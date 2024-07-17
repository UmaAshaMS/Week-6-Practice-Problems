const profile = [{name:'Uma',age:28},{name:'Kannan',age:19}, {name:"Dheeraj",age:32}]

/*
1.obj
2.

*/

const oldPerson = profile.reduce( (oldest, person) => {
    if(oldest.age > person.age){
        return oldest
    }
    return person;
},profile[0]);

console.log(oldPerson.name)
