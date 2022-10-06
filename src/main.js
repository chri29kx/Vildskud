import "./style.css";
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

const openNav = document.querySelector(".openbtn");
const closeNav = document.querySelector(".closebtn");

openNav.addEventListener("click", open);
closeNav.addEventListener("click", close);
function open() {
  document.getElementById("mySidepanel").style.width = "450px";
}

/* Set the width of the sidebar to 0 (hide it) */
function close() {
  document.getElementById("mySidepanel").style.width = "0";
}
