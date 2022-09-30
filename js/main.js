var burgerBtn = document.querySelector(".header__burger");
var navMenyu = document.querySelector(".header__nav");

burgerBtn.addEventListener("click" , () =>{
    burgerBtn.classList.toggle("shownav");
    navMenyu.classList.toggle("shownav");
})