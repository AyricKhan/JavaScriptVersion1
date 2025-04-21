/// There is a special syntax to work with promises in javaScript..
///  A function can be made async by using async keyword like this...

//  async function laibu(){
//     return 10;
//  }
/// An async function always return a promise.
//other values are wrapped in a promise automatcally..
//We can do somthing like this..
///laibu().then(alert)

/// So, async ensures that the function returns a promise and waps non promise in it.



//  async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })

// }

//// now i use in this program what is featch API...

// async function getData() {
//     //Simulate get data from a server
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json()
//     console.log(data)
//     return 455

// }
// async function main() {
//     console.log("loading modules")


//     console.log("do somthing else")

//     console.log("load data")
//     let data = await getData()
//     console.log(data)

//     console.log("proces data")
//     console.log("task 2")

// }
// main()



// let data =getData()
// data.then((v)=>{
//     console.log(data)

// console.log(data)

// console.log("proces data")
// console.log("task 2")

// })


// async function getData() {
//     //simulate get data from a server
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json()
//     console.log(data)
//     return 455
// }

// async function main() {
//     console.log("loading modulas")
// }
// console.log("do somthing else")
// console.log("load data")
// let data = await getData()
// console.log(data)

// console.log("proces data")
// console.log("task 2")



// settle means resolve or reject
// resolve means promise has settled sucessfully
// reject means promise has not settles succefully

// https://jsonplaceholder.typicode.com/posts
//  i can use a loats of multiple api from this side..

async function getData() {
    let x =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data =await x.json()
     return data

}
async function main() {
    

console.log("loading module")

console.log("do somthing else")

console.log("load data")

let data = await getData()
console.log(data)
    console.log("process data")
    console.log("task 2")
}
main()
// data.then((v) => {
//     console.log(data)
//     console.log("process data")
//     console.log("task 2")
// })
