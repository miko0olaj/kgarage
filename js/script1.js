window.onscroll = function() {animate()};

function animate() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("element1").className = "animate1";
  } 

  if (document.documentElement.scrollTop > 50) {
    document.getElementById("element2").className = "animate2";
  } 

  if (document.documentElement.scrollTop > 50) {
    document.getElementById("element3").className = "animate3";
  } 
}