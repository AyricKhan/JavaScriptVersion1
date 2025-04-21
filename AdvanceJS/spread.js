//Spread Syntax 
// Spread syntax allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected.
//In an object literal,the properties of an object and adds the key-vlaue pair to the object being created.
function sum(a,b,c){
    return a+b+c
}
(async function main() {
let obj ={
    a:1,
    b:2,
    c:3
}    
let {a,b}=obj
console.log(a,b)
let arr=[1,4,6]
console.log(sum (arr[0],arr[1],arr[2]))
console.log(sum(...arr))
})()