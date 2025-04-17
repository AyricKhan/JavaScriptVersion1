let butoon = document.getElementById("btn")
//List of all mouse events

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
butoon.addEventListener("mousedown",()=>{
    document.querySelector(".box").innerHTML =
    "<b>yahh you were clicked</d>Enjoy your clicked"
})

butoon.addEventListener("contextmenu",()=>{
   alert("Don't right click please click left click...")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode)
  
})
