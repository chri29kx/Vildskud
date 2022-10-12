import "./style.css";
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

const openNav = document.querySelector(".openbtn");
const closeNav = document.querySelector(".closebtn");
const myNav = document.getElementById("stickyhead");

openNav.addEventListener("click", open);
closeNav.addEventListener("click", close);
function open() {
  document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function close() {
  document.getElementById("mySidepanel").style.width = "0";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    myNav.style.display = "block";
  } else {
    myNav.style.display = "none";
  }
}

const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
  cookieboks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
}

if (sessionStorage.getItem("fjerncookieboks")) {
  cookieboks.classList.add("hidden");
}
