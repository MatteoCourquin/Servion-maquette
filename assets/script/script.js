// **** SCRIPT **** //
// ================ //

const menuBurger = document.querySelector('.nav-header')
const iconeBurger = document.querySelector('.icone-burger')



iconeBurger.addEventListener('click', () =>{
    iconeBurger.classList.toggle('active');
    menuBurger.classList.toggle('show-close');
})

