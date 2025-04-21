class User{
    constructor(name){
        //invokes the setter
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length<4){
            console.log("Name is too short.");
            return;
        }
        this._name=value;
    }
}
let user= new User("john");
console.log(user.name);//john
user = new User("");// Name is too short.
// Instanceof operator:---
// The instanceof operator allows to check whether an object belongs to certain class. 
// The syntax is:-

// <obj>intanceof<class>
// It returns true if obj belongs to the class or any other class inheriting from it.
