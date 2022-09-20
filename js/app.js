let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.menu')

// Line of Menu burger   &&  Switch Toggle of Menu Show and off
menu.addEventListener('click', () => {
    menu.classList.toggle('move')
    navbar.classList.toggle('active')  
})