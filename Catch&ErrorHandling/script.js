// let a = prompt("Enter first number")
// let b = prompt("Enter second number")
// // This is mdn error side.. we can use Throw error multipal  whatever we want..
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
// if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError("sorry this is not a number Please put a number.")
// }
// let sum = parseInt(a) + parseInt(b)
// // with the using of try catch meathod we can catch the error of any JS program. 
// try {
//     console.log("The sum of these number is", sum * x)
// } catch (error) {
//     console.log("Error is comming bro..")
// }


//use finally meathod

let a = prompt("Enter first number")
let b = prompt("Enter second number")
// This is mdn error side.. we can use Throw error multipal  whatever we want..
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not a number Please put a number.")
}

// with the using of try catch meathod we can catch the error of any JS program. 

let sum = parseInt(a) + parseInt(b)
function main(){
let x = 1;
try {
    console.log("The sum of these number is", sum * x)
} catch (error) {
    console.log("Error is comming bro..")
    return false

}
finally{
    console.log("files are being closed and db connection is being closed..")
}
}

let c=main()

