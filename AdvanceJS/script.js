// There are some JavaScript concept which make the life a developer exteremdy simple. We will discuss some of those in this chapter..
async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
    
}

( async function main(){ // i am converting this function in IIFE :- Immediately Invoked Function Expression.


let a= await sleep()
console.log(a)
let b= await sleep()
console.log(b)
})()

// Destructuring
// Destructuring assignments is used to unpack values from an array, or properties. from object, ito distenct varibles.
