console.log("hello");

var i = 0;
var coverTxt = "Untamed";
var coverSpeed = 175;

function typeWriter() {
  if (i < coverTxt.length) {
    document.getElementById("coverTyped").innerHTML += coverTxt.charAt(i);
    i++;
    setTimeout(typeWriter, coverSpeed,);
  }


}
