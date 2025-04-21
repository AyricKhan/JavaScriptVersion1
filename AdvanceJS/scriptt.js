// Destructuring
// Destructuring assignments is used to unpack values from an array, or properties. from object, ito distenct varibles.
(async function main() {
//     let [x,y,rest]=[1,5,7,8,9,10]
// console.log(x,y,rest) 
// i can take the value from object with the use of this syntax..
let obj={
    a:1,
    b:2,
    c:3
}   
let {a,b}=obj
console.log(a,b)
})()
