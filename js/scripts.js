console.log("hello");

document.body.onload = function() {
  typeWriter();
};

//Typing effect ---------

let i = 0;
let coverTxt = "Untamed";
let coverSpeed = 1;

function typeWriter() {
  setTimeout(function(){
      //deferred onload
      if (i < coverTxt.length) {
        document.getElementById("coverTyped").innerHTML += coverTxt.charAt(i);
        i++;
        setTimeout(typeWriter, coverSpeed);
      }
    }, 250);
  }
//Nav Bar Colour Change Past navScrollPoint


let scrollpos = window.scrollY
const header = document.querySelector("header")
const header_height = header.offsetHeight


const addScrollH = () => header.classList.add("header-scroll")
const removeScrollH= () => header.classList.remove("header-scroll")

const logo = document.querySelector(".logo")
const addScrollL = () => logo.classList.add("logo-scroll")
const removeScrollL= () => logo.classList.remove("logo-scroll")

const nav = document.querySelector(".navbar-inner")
const addScrollN = () => nav.classList.add("navbar-inner-scroll")
const removeScrollN= () => nav.classList.remove("navbar-inner-scroll")


window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    addScrollH()
    addScrollL()
    addScrollN()
}
  else {
    removeScrollH()
    removeScrollL()
    removeScrollN()
  }
})










//Navigation bar button-------------------

    let mobMenu= document.getElementById("navbar");
    let menuBg= document.querySelector("header");


document.querySelector("#hbg-menu").addEventListener("click", function(){
        mobMenu.classList.toggle("nav-bar");
        mobMenu.classList.toggle("navbar-show");





    });







//To Top Button ---------------------------

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
