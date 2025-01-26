import combo from './img/combo.png'
import momos from './img/momos.png'
import pizza from './img/pizza.png'
import pizza2 from './img/pizza2.png'

const container = document.querySelector('.container')
const homeContainer = document.createElement('div');
homeContainer.setAttribute('id', 'home-container');
console.log(container);


const banner = [
    {
        imageSrc : momos,
        textHtml : `<span class="quoteSpan">"</span> Life is too short to skip the <span class="momosSpan">momos!</span> <span class="quoteSpan">"</span>`,
    },
    {
        imageSrc : pizza,
        textHtml : `<span class="quoteSpan">"</span> <span class="pizzaSpan">Pizza</span> is not just food; it's a way of life. <span class="quoteSpan">"</span>`,
    },
    {
        imageSrc : combo,
        textHtml : `<span class="quoteSpan">"</span> Good food, good mood: <span class="mottoSpan">that's our motto!</span> <span class="quoteSpan">"</span>`,
    },
    {
        imageSrc : pizza2,
        textHtml : `<span class="quoteSpan">"</span>Pizza: the only love <span class="triangleSpan">triangle</span> I want to be in.<span class="quoteSpan">"</span>`,
    },
]
for(let i=0;i<4;i++){
    let bannerEle = document.createElement('div')
    bannerEle.setAttribute('class', 'banner')
    
    let img = document.createElement('img');
    img.src = banner[i].imageSrc;

    let p = document.createElement('p')
    p.innerHTML = banner[i].textHtml;

    bannerEle.appendChild(img);
    bannerEle.appendChild(p);
    homeContainer.appendChild(bannerEle);
}
container.appendChild(homeContainer);

const hideHomeContainer = function(){
    homeContainer.style.display ='none';
}   
const showHomeContainer = function(){
    homeContainer.style.display ='block';
}   

export {
    hideHomeContainer,
    showHomeContainer
};