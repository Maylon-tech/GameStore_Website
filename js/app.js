let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.menu')

// Line of Menu burger   &&  Switch Toggle of Menu Show and off
menu.addEventListener('click', () => {
    menu.classList.toggle('move')
    navbar.classList.toggle('active')  
    bell.classList.remove('active')
})

// Notifications
let bell = document.querySelector('.notification')
const bellIcon = document.getElementById('bell-icon')

bellIcon.addEventListener("click", () => {
    bell.classList.toggle('active')
})


// Swiper code

var swiper = new Swiper(".trending-content", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay:{
            delay:5000,
            disableOnInteraction: false
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });