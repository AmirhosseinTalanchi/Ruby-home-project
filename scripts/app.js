let line = document.querySelector(".line")
let lineWrapper = document.querySelector(".line-wrapper")
let headerMenu = document.querySelector(".header__menu")
let cover = document.querySelector(".cover")
let heart = document.querySelectorAll(".content-box__heart")

lineWrapper.addEventListener("click", openMenu);

function openMenu(){
    line.classList.toggle("line__open")
    headerMenu.classList.toggle("header__menu--open")
    cover.classList.toggle("cover--show")
}


cover.addEventListener("click" ,openMenu);

heart.forEach(function(heart){
    heart.addEventListener("click" , function(event){
        event.target.parentNode.classList.toggle("content-box__heart--RED")
    })
})

const swiper = new Swiper(".swiper", {

    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
      },

    slidesPerView: 1,
    spaceBetween: 30,
   
    navigation: {
        nextEl: '.swiper-button-next-my',
        prevEl: '.swiper-button-prev-my',
      },
      breakpoints:{
        992:{
            slidesPerView: 2,
             spaceBetween: 10,
        }

      }
  });



