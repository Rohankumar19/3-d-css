
document.getElementsByClassName("above")[0].style="display:none;"

document.getElementsByClassName("poster")[0].addEventListener("mouseover", function() {
  // document.getElementsByClassName("poster")[0].style.backgroundColor = "red";


document.getElementsByClassName("season_1")[0].style="  transform: perspective(400px) translateY(25%) rotateX(45deg) translateZ(0);opacity:0.5"
  
document.getElementsByClassName("above")[0].style=" display:block;"
})

document.getElementsByClassName("poster")[0].addEventListener("mouseout", function() {
  document.getElementsByClassName("season_1")[0].style="  transform: perspective(400px) translateY(0%) rotateX(4deg) translateZ(0);opacity:1"
  document.getElementsByClassName("above")[0].style="display:none; transition:ease-in-out;"

})
