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

function scrollFunction() {
  if (document.body.scrollTop > 100) {
    document.getElementById("nav").addClass("navScroll");
  } else {
    document.getElementById("nav").removeClass("navScroll");
  }
}

window.onscroll = function() {
    let nav = document.getElementById("nav");
    let navCont = document.getElementById("nav-container")
    let abnLogo = document.getElementById("abn-nav")

    if ( window.pageYOffset > 100 ) {
        nav.classList.add("navScroll");
        navCont.classList.add("navContScroll");
        abnLogo.classList.add("abnScroll");
    } else {
        nav.classList.remove("navScroll");
        navCont.classList.remove("navContScroll");
        abnLogo.classList.remove("abnScroll");

    }
}
