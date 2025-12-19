const hamburgn_menu = document.querySelector('.hamburgn-menu');
const  close_icon = document.querySelector('.close-icon')
const header = document.querySelector('header')
const gototop = document.querySelector('.gototop')
const mainContainer = document.querySelector('.main-container')
const navbar =document.querySelector('.nav-bar')

hamburgn_menu.addEventListener('click',((el)=>{
    el.stopPropagation()
    header.classList.add('menu-open')
}))

navbar.addEventListener('click',((el)=>{
    el.stopPropagation()
}))


close_icon.addEventListener('click',((el)=>{
    header.classList.remove('menu-open')
}))

window.addEventListener('click',((el)=>{
    header.classList.remove('menu-open')
}))


 gototop.addEventListener('click',((ek)=>{
    mainContainer.scrollTo(0,0)
 }))