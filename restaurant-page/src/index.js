import './style.css'
import './homeStyle.css'
import './menuStyle.css'
import './contactStyle.css'
import { hideHomeContainer, showHomeContainer } from './home'
import { showMenuContainer, hideMenuContainer } from './menu'
import { hideContactContainer, showContactContainer} from './contact'
const homeBtn = document.querySelector('.homeBtn')
const menuBtn = document.querySelector('.menuBtn')
const contactBtn = document.querySelector('.contactBtn')



homeBtn.addEventListener('click', ()=>{
    showHomeContainer();
    hideMenuContainer();
    hideContactContainer();
})
menuBtn.addEventListener('click', ()=>{
    hideHomeContainer();
    showMenuContainer();
    hideContactContainer();
})
contactBtn.addEventListener('click', ()=>{
    hideHomeContainer();
    hideMenuContainer();
    showContactContainer();
})
// showHomeContainer();
