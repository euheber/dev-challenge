const mobileBtn = document.querySelector('#mobile-menu')


function mobileMenu(){
    const nav = document.querySelector('nav')
    nav.classList.toggle('active')

}


mobileBtn.addEventListener('click', mobileMenu)