console.log("laibu")

// let laibuSh = document.getElementsByClassName("box")
// console.log(laibuSh)


// laibuSh[2].style.backgroundColor ="red"
// document.getElementById("red").style.backgroundColor="pink"
// document.querySelector(".box").style.backgroundColor="skyblue";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(function (e) {
        e.style.backgroundColor = "skyblue";
    })