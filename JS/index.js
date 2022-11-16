const hamburger = document.querySelector("button");
hamburger.addEventListener('click', function myfunction(){
    hamburger.classList.toggle("active");
    const sidebar = document.querySelector(".features");
    sidebar.classList.toggle("active");
    document.body.classList.toggle("dark");
})
const theFeatures = document.querySelectorAll("li");
theFeatures[0].addEventListener("click" , function theShow(){
    const dropDown = document.querySelectorAll(".drop-down");
    const theIcon = document.querySelectorAll("i");
     theIcon[0].classList.toggle("pressed");
    theFeatures[0].classList.toggle("first-height");
    dropDown[0].classList.toggle("show");
});
const anotherFeatures = document.querySelectorAll("li");
anotherFeatures[1].addEventListener("click" , function anotherShow(){
    const anotherdropDown = document.querySelector(".drop-down-two");
    const theIcon = document.querySelectorAll("i");
     theIcon[5].classList.toggle("pressed");
    anotherFeatures[1].classList.toggle("second-height");
    anotherdropDown.classList.toggle("show-two");
});