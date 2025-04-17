console.log('this is a file of promise');
///The solution to the callback hell is promises. A promise is a "promise" code of execution.
/// The code either excutes or fails. in both the cases the subscriber, or user will be notifid.


/// The syntex of promise is look like this.
let prom1 = new Promise((resolve, reject) => {
    let a =Math.random();
    if (a<0.5){
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("yes i am done")
            resolve("laibu")

        },3000);
    }
    // setTimeout(() => {
    //     console.log("yes i am done...")
    //     resolve("Harry")
    // }, 3000);
})

prom1.then((a) => {
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
/// consumers: then & catch meathod.
/// The consuming code can recive the fine result of a promise through then & catch.....

let prom2 = new Promise((resolve, reject) => {
    let a =Math.random();
    if (a<0.5){
        reject("No random number was not supporting you 2")
    }
    else{
        setTimeout(()=>{
            console.log("yes i am done 2")
            resolve("laibu 2")

        },1000);
    }
})

let p3 = Promise.race([prom1,prom2])
p3.then((a,e)=>{
    console.log(a,)
}).catch(err=>{
    console.log(err)
})