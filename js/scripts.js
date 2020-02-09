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

//Nav Bar Colour Change Past navScrollPoint






}
