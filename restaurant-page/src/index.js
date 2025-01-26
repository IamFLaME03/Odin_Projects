import './style.css'
import './homeStyle.css'
import './menuStyle.css'
import { hideHomeContainer, showHomeContainer } from './home'
import { menuToggleFunction, showMenuContainer, hideMenuContainer } from './menu'
const homeBtn = document.querySelector('.homeBtn')
const menuBtn = document.querySelector('.menuBtn')
const aboutBtn = document.querySelector('.aboutBtn')

homeBtn.addEventListener('click', ()=>{
    showHomeContainer();
    hideMenuContainer();
})
menuBtn.addEventListener('click', ()=>{
    hideHomeContainer();
    showMenuContainer();
})
aboutBtn.addEventListener('click', ()=>{
    hideHomeContainer();
    hideMenuContainer();
})
menuToggleFunction();