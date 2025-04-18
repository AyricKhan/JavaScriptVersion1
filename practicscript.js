// alert("hello")

// console.log("code is running...")
// console.log("code is also running....")
// console.log("code is looking like a wowww....")

// var a = prompt("enter your number;- ")
// var isTrue=confirm("are you sure you want to leave this page and not blast this computer ")
// if(isTrue){
//     console.log("computer is blasting")
// }
// else{
//     console.log("computer is not blasting")
// }

// console.log("your number is" + a)

// console.log("Hey this is tutorial 55");

// var a = 5;
// // a = a + 1
// let b = 6;
// let c = "Laibu";
// let _a = "Shubham";
// // var 55a = "Rohan"; // Not Allowed

// // console.log(a +  b + 8);
// // console.log(typeof a, typeof b, typeof c);
// {
//     // let a = 66;
//     console.log(a)
// }
// console.log(a)
// // const a1 = 6;
// // a1 = a1 + 1; // Not Allowed because a1 is constant


// let x = "Laibu bhai";
// let y = 22;
// let z = 3.55;
// const p = true;
// let q = undefined;
// let r = null;

// console.log(x, y, z, p, q, r)
// console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


// let o = {
//     "name": "Laibu",
//     "job code": 5600,
//     "is_handsome": true
// }

// console.log(o);
// o.salary = "100crores";
// console.log(o);
// o.salary = "500crores";
// console.log(o);


// console.log("this is tuturial 55 and i am laibu shaikh.")

// var a = 5;
// let b = 6;
// let c = "laibuShaikh"

// console.log(a + b + 2);
// console.log(typeof a, typeof b, typeof c);


// let x = "laibu shaikh"
// let y =22;
// let z = 3.33;
// const p =true;
// let q = undefined;
// let r = null;

// console.log(x,y,z,p,q,r)
// console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// let l ={
//     "name": "laibu",
//     "job code": 4244,
//     "is_handsome": true
// }
// console.log(l);
// l.salary="200 cr";
// console.log(l);
// l.salary="500cr";
// console.log(l)

// let arr =[1,2,3,4,5,7]

// arr[0]=4344;
// console.log(arr,typeof arr);
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[5])

// console.log(arr.toString())
// console.log(arr.join(" and "))



// let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

// arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

// console.log(arr.toString())
// console.log(arr.join(" and "))



// let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)    
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333) 
// (4) [1, 222, 333, 5]
// let a1 =[1,2,3]
// let a2 =[4,5,6]
// let a3 =[7,8,9]

// a1.concat(a2,a3)


// featching data 


// async function getData() {
//     let l= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await l.json()
//     console.log(data)
//     return 455

// }
//  async function main() {
//     console.log("loading modules")


//  console.log("do somthing else")
//  console.log("load data")
//  let data = await getData()
//  console.log(data)

//  console.log("proces data")
//  console.log("task 2")
// }
// main()


// promise is a code of execuation
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        }, 3500);
    })

}
console.log("loading module")

console.log("do somthing else")

console.log("load data")

let data = getData()

data.then((v) => {
    console.log("process data")
    console.log("task 2")
})


