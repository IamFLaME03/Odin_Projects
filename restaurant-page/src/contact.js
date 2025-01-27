import zomato from "./img/Zomato.png";
import swiggy from "./img/Swiggy.png";
import justdial from "./img/jd-bg.png";
import instagram from "./img/insta.png";

const contactBtn = document.querySelector('.contactBtn')
const body = document.querySelector('body')
const contactContainer = document.createElement('div')
contactContainer.setAttribute('id', 'contact-container')
const innerDiv = document.createElement('div')
contactContainer.appendChild(innerDiv)

const card = [
    {
        imgSrc : zomato,
        link : 'https://www.zomato.com/bharuch/momos-4-moments-bharuch-locality/order',
    },
    {
        imgSrc : swiggy,
        link : 'https://www.swiggy.com/restaurants/momos-4-moments-golden-square-old-town-bharuch-788274',
    },
    {
        imgSrc : justdial,
        link : 'https://www.justdial.com/Bharuch/Momos-For-Moments-Opposite-Inox-Cinema-Zadeshwar/9999P2642-2642-230623232411-R9E4_BZDET',
    },
    {
        imgSrc : instagram,
        link : 'https://www.instagram.com/momoz_4_moments/',
    },
]
//location section
const location = document.createElement('div')
location.setAttribute('class', 'location')
location.innerHTML = `  <p>
                            <strong>Address : </strong>Golden square, Besides Dmart, G-28, College Rd, near pantaloons, Bharuch, Gujarat 392001
                        </p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.4843970350894!2d73.00482219999999!3d21.722738800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be021574d19320b%3A0xf3092c188fee7d45!2sMomoz%204%20moments!5e0!3m2!1sen!2sin!4v1737993861546!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    `
innerDiv.appendChild(location);

//timing section
const timing = document.createElement('div')
timing.setAttribute('class', 'timing')
timing.innerHTML = `<strong> Time : </strong> 1PM to 11PM for all Days`
innerDiv.appendChild(timing)

//cards section
const linkCards = document.createElement('div')
linkCards.setAttribute('class', 'link-cards')
for(let c of card){
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    const a = document.createElement('a')
    a.setAttribute('href', c.link);
    a.setAttribute('target', '_blank')
    const img = document.createElement('img')
    img.src = c.imgSrc;
    
    a.appendChild(img)
    card.appendChild(a)
    linkCards.appendChild(card)
}
innerDiv.appendChild(linkCards)
body.appendChild(contactContainer)


const hideContactContainer = function(){
    contactContainer.style.display ='none'
    contactBtn.classList.remove('active')
}   
const showContactContainer = function(){
    contactContainer.style.display ='block'
    contactBtn.classList.add('active')
}

export {
    hideContactContainer,
    showContactContainer
};