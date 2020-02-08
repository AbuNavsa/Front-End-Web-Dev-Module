console.log("hello");

document.body.onload = function() {
  typeWriter();
};

//Typing effect ---------

var i = 0;
var coverTxt = "Untamed";
var coverSpeed = 1;

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
