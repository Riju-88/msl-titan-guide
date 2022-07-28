//Loading bar JS
const loadCont= document.querySelector("#load-cont");
const load=document.querySelector("#load");
window.addEventListener("load",()=>{
  load.classList.add("hide");
  setTimeout(() => {
      loadCont.removeChild(load)
  }, 1000);
});
// document.addEventListener("transitionend",()=>{
  
// });
// Loading bar JS