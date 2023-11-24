const element=document.getElementById("start")
const text=document.getElementById("name")
 element.onclick=()=>{
    var save=text.value
    localStorage.setItem("save",save)
 }

const button = document.getElementById("button")

button.onclick = ()=>{
    window.location.href = "instruction.html";
}
