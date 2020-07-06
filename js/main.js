document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Ravikesh Yadav.", "A Web Developer.", "A Flutter Developer."];
    
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("span#change").innerHTML = text.substring(0, i+1) ;
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });

var modal = document.getElementById("work-modal")
var btn = document.getElementById("open-work")
var span = document.getElementById("close");
// var body = document.getElementById("body")

btn.onclick = function() {
  modal.style.display = "block"
  // body.style.overflow = "hidden"
}

span.onclick = function() {
  modal.style.display = "none"
}



// function toggleMenu() {
//   document.getElementById("sidebar").classList.toggle("active")
//   document.getElementsByClassName("ravi-sidebar").style.display = "block"
// }

// var sidebar = document.getElementById("sidebar");
// sidebar.onclick = function()
var ravisidenav = document.getElementById("ravisidenav")
function openNav() {
  document.getElementById("ravisidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("ravisidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

window.onclick = () => closeNav()