// In programming we aften take somthing and then extend if for example we might want to create a user object and "admin" and "quest" will be slighty modifield varints af it.

// let obj ={
//     a: 1,
//     b:  "Laibu"
// }
// console.log(obj)

// [[prototype]]
// JavaScript object have a speiand propetry called prototype that is eighter null or reference another object.
// [[prototypeObject]] prototype--->
//object

//         Why we make prototype... Because after i make prototype me go in a interitance

// When we try to read a property from a prototype and its missing. JavaScript automatacally takes it from the prototype.
// This is called "Prototypal interitance"


// Example:-
// let animal ={
//     eats: true
// };
// let rabbit ={
//     jumps:true
// };
// rabbit.___proto___= animal; // sets rabbit.[[prototype]] = animal

class Animal{
    constructor(name){
        this.name=name
        console.log("Object is created....")
    }
    eats(){
        console.log("I am eating.")
    }
    jumps(){
        console.log("i am jumping")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion...")
    }
    eats(){
        super.eats()
        console.log("i am eating roar")  //Change 
    }

}
let a = new Animal("ginjal");
console.log(a)

let l = new Lion("Shera")

console.log(l)