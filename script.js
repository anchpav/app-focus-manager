function saveApps(){

let selected=[]

document.querySelectorAll("input[type=checkbox]:checked").forEach(
app => selected.push(app.value)
)

localStorage.setItem("blockedApps", JSON.stringify(selected))

alert("Saved!")

}


function startTimer(){

let minutes=document.getElementById("minutes").value

let seconds=minutes*60

let timer=document.getElementById("timer")

let interval=setInterval(()=>{

seconds--

let m=Math.floor(seconds/60)
let s=seconds%60

timer.innerText=m+":"+s

if(seconds<=0){

clearInterval(interval)

alert("Focus session finished!")

}

},1000)

}
