let darkmode = localStorage.getItem('darkmode');
let swi = document.getElementById("switch");

const enableDarkkmode = () =>{
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode','active')
}

const disableDarkkmode = () =>{
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode','null')
}

if(darkmode==="active") enableDarkkmode()

swi.addEventListener("click", ()=>{
  darkmode= localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkkmode() : disableDarkkmode()
})