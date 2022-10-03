var burgerBtn = document.querySelector(".header__burger");
var navMenyu = document.querySelector(".header__nav");

burgerBtn.addEventListener("click" , () =>{
    burgerBtn.classList.toggle("shownav");
    navMenyu.classList.toggle("shownav");
})


$('.card__carousel').slick({
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});