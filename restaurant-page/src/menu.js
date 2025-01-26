const body = document.querySelector('body')

const menuContainer = document.createElement('div')
const flexContainer = document.createElement('div')
menuContainer.setAttribute('id', 'menu-container')
flexContainer.setAttribute('class', 'flex-container')

const menu = [
    {//steam momo
        section: 'Steam Momos',
        items : [
            {
                name: 'Veg Steam',
                price: 100,
            },
            {
                name: 'Schezwan Steam',
                price: 100,
            },
            {
                name: 'Mint Steam',
                price: 100,
            },
            {
                name: 'Panner Steam',
                price: 100,
            }
        ],
    },
    {//pan fry momo
        section: 'Pan Fry Momos',
        items : [
            {
                name: 'Veg Momos',
                price: 120,
            },
            {
                name: 'Schezwan Momos',
                price: 120,
            },
            {
                name: 'Peri Peri Momos',
                price: 120,
            },
            {
                name: 'Mint Momos',
                price: 120,
            },
            {
                name: 'Panner Momos',
                price: 140,
            },
            {
                name: 'Cheese Momos',
                price: 140,
            },
            {
                name: 'Panner Cheese Momos',
                price: 150,
            },
        ]
    },
    {//fried momo
        section: 'Fried Momos',
        items : [
            {
                name: 'Veggie Momos',
                price: 180,
            },
            {
                name: 'Panner Momos',
                price: 180,
            },
            {
                name: 'Peri Peri Momos',
                price: 180,
            },
            {
                name: 'Mint Momos',
                price: 180,
            },
            {
                name: 'Schezwan Momos',
                price: 180,
            },
            {
                name: 'Cheese Momos',
                price: 180,
            },
            {
                name: 'Paneer Cheese Momos',
                price: 200,
            },
        ]
    },
    {//special momo
        section: 'Special Momos',
        items : [
            {
                name: 'Dragon Momos',
                price: 220,
            },
            {
                name: 'Pizza Momos',
                price: 220,
            },
            {
                name: 'Gravy Momos',
                price: 220,
            },
        ]
    },
    {//vadapav
        section: 'Vadapav',
        items : [
            {
                name: 'Butter Vadapav',
                price: 15,
            },
            {
                name: 'Cheese Vadapav',
                price: 30,
            },
            {
                name: 'Peri Peri Vadapav',
                price: 25,
            },
            {
                name: 'Tandoori Vadapav',
                price: 25,
            },
            {
                name: 'Schewan Vadapav',
                price: 25,
            },
            {
                name: 'Tandoori Mayo Vadapav',
                price: 25,
            },
        ]
    },
    {//burger
        section: 'Burger',
        items : [
            {
                name: 'Veg Burger',
                price: 50,
            },
            {
                name: 'Schezwan Burger',
                price: 60,
            },
            {
                name: 'Mint Burger',
                price: 60,
            },
            {
                name: 'Tandoori Mayo Burger',
                price: 70,
            },
            {
                name: 'PeriPeri Burger',
                price: 70,
            },
            {
                name: 'PeriPeri Cheese Burger',
                price: 80,
            },
            {
                name: 'Cheese Burger',
                price: 80,
            },
        ]
    },
    {//garlic bread
        section: 'Garlic Bread',
        items : [
            {
                name: 'Cheese Garlic Bread',
                price: 100,
            },
        ]
    },
    {//french fries
        section: 'French Fries',
        items : [
            {
                name: 'Salted Fries',
                price: 60,
            },
            {
                name: 'Peri Peri Fries',
                price: 80,
            },
            {
                name: 'Cheesy Fries',
                price: 100,
            },
        ]
    },
    {//pasta
        section: 'Pasta',
        items : [
            {
                name: 'Cheese Macroni',
                price: 100,
            },
            {
                name: 'Masala Pasta',
                price: 100,
            },
            {
                name: 'Red sauce Pasta',
                price: 120,
            },
        ]
    },
    {//maggie
        section: 'Maggie',
        items : [
            {
                name: 'Plain Maggie',
                price: 50,
            },
            {
                name: 'Veggies Maggie',
                price: 60,
            },
            {
                name: 'Tandoori Maggie',
                price: 80,
            },
            {
                name: 'Cheese Maggie',
                price: 80,
            },
            {
                name: 'Panner Tandoori Maggie',
                price: 80,
            },
            {
                name: 'Tadka Maggie',
                price: 80,
            },
            {
                name: 'Panner Maggie',
                price: 80,
            },
            {
                name: 'PeriPeri Maggie',
                price: 80,
            },
            {
                name: 'Schezwan Maggie',
                price: 80,
            },
        ]
    },
    {//pizza
        section: 'Pizza Party!',
        items : [
            {
                name: `<strong>MARGHERITA PIZZA</strong>: THE OG FAVORITE!`,
                price: 150,
            },
            {
                name: `<strong>TANDOORI PANEER PIZZA</strong>: A SPICY PARTY ON A PLATTER!`,
                price: 170,
            },
            {
                name: `<strong>FARMHOUSE PIZZA</strong>: A VEGGIE WONDERLAND ON A CRUST!`,
                price: 170,
            },
            {
                name: `<strong>CORN CHEESE PIZZA</strong>: SWEET, GOOEY HAPPINESS!`,
                price: 170,
            },
            {
                name: `<strong> 7 CHEESE PIZZA</strong>: A CHEESY DREAM COME TRUE!`,
                price: 200,
            },
        ]
    },
    {//sandwich
        section: 'Sandwich',
        items : [
            {
                name: 'Bombay Sandwich',
                price: 60,
            },
            {
                name: 'Chutney Cheese Sandwich',
                price: 60,
            },
            {
                name: 'Grill Sandwich',
                price: 80,
            },
            {
                name: 'Cheese Grill Sandwich',
                price: 100,
            },
        ]
    },
    {//frankie
        section: 'Frankie',
        items : [
            {
                name: 'Veg Frankie',
                price: 40,
            },
            {
                name: 'Peri Peri Frankie',
                price: 70,
            },
            {
                name: 'Schezwan Frankie',
                price: 70,
            },
            {
                name: 'Cheese Frankie',
                price: 80,
            },
        ]
    },
    {//hto beverages
        section: 'Hot Beverages',
        items: [
            {
                name:'Chai(Adrak, Elichi, Masala)' ,
                price: 30,
            },
            {
                name: 'Black tea',
                price: 40,
            },
            {
                name: 'Green tea',
                price: 40,
            },
            {
                name: 'Coffee',
                price: 40,
            },
            {
                name: 'Black Coffee',
                price: 40,
            },
            {
                name: 'Hot Chocolate',
                price: 90,
            }
        ]
    },
    {//cold beverages
        section: 'Cold Beverages',
        items: [
            {
                name:'Kiwi Mojito' ,
                price: 50,
            },
            {
                name:'Orange Mojito' ,
                price: 50,
            },
            {
                name:'Virgin Mojito' ,
                price: 60,
            },
            {
                name:'Strawberry Mojito' ,
                price: 70,
            },
            {
                name:'Blueberry Mojito' ,
                price: 80,
            },
            {
                name:'Cold Coffee' ,
                price: 90,
            },
            {
                name:'Cold Coffee with Icecream' ,
                price: 120,
            },
        ]
    },
    {//shakes
        section: 'Shakes',
        items: [
            {
                name:'Chocolate Shake' ,
                price: 100,
            },
            {
                name:'Oreo Shake' ,
                price: 130,
            },
            {
                name:'Kitkat Shake' ,
                price: 130,
            },
            {
                name:'Strawberry Shake' ,
                price: 130,
            },
            {
                name:'Banana Shake' ,
                price: 140,
            },
            {
                name:'Bournvita Shake' ,
                price: 140,
            },
            {
                name:'Cadbury Shake' ,
                price: 150,
            },
            {
                name:'Blueberry Shake' ,
                price: 150,
            },
            {
                name:'Mango Shake' ,
                price: 150,
            },
            {
                name:'Butterscotch Shake' ,
                price: 150,
            },
        ]
    },
    {//combo
        section: 'Combo Meal',
        items: [
            {
                name:`VEGGIE STEAM <strong>+</strong> MASALA CHAI <strong>+</strong> PLAIN MAGGIE` ,
                price: 150,
            },
            {
                name:`PERI PERI PANYFRY MOMOS <strong>+</strong> HOT COFFEE <strong>+</strong> TANDOORI MAGGIE` ,
                price: 200,
            },
            {
                name:`SCHEZWAN FRIED MOMOS <strong>+</strong> SALTED FRIES <strong>+</strong> ORANGE MOJITO` ,
                price: 290,
            },
            {
                name:`BEST MEAL VEG BURGER <strong>+</strong> FRENCH FRIES <strong>+</strong> COLD COFFEE <strong>+</strong> CHEESE GARLIC BREAD (2)` ,
                price: 210,
            },
            {
                name:`<strong>COUPLE MEAL :</strong>  2X VEG BURGER <strong>+</strong> 1 MOMOS STEAM <strong>+</strong> 2 COLD COFFEE <strong>+</strong> FRENCH FRIES <strong>+</strong> NACHOS <strong>+</strong> ONE (SURPRISE ITEM)` ,
                price: 500,
            },
        ]
    },
]

for(let s of menu){     //sections loop
    // console.log(s);
    const section = document.createElement('div')
    
    const btn = document.createElement('button')
    btn.setAttribute('class', 'dropdown-btn')
    btn.setAttribute('id', s.section)
    btn.innerHTML =`${s.section} <i class="fa-solid fa-chevron-down"></i>`
    
    const dropdownContainer = document.createElement('div');
    dropdownContainer.setAttribute('class', 'dropdown-container');
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'list');
    
    for(let item of s.items){       //items loop
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        const name = document.createElement('p')
        name.setAttribute('class', 'name');
        const price = document.createElement('p')
        price.setAttribute('class', 'price');

        name.innerHTML = item.name;
        price.innerHTML = item.price;

        li.appendChild(name);
        li.appendChild(price);
        
        ul.appendChild(li)
    }

    dropdownContainer.appendChild(ul);
    section.appendChild(btn);
    section.appendChild(dropdownContainer);

    flexContainer.appendChild(section)
}
console.log(menuContainer);
menuContainer.appendChild(flexContainer)
body.appendChild(menuContainer)
menuContainer.style.display = 'none'

const showMenuContainer = () => {
    menuContainer.style.display = 'block'
}
const hideMenuContainer = () => {
    menuContainer.style.display = 'none'
}

// ----toggle-menu-----
const dropdown = document.querySelectorAll(".dropdown-btn");
const menuToggleFunction = function (){
    dropdown.forEach((i) => {
        i.addEventListener("click", function (e) {
            i.classList.toggle("active");
            const dropdownContent = i.nextElementSibling;
            let box;
                if(e.target.classList[0] === 'fa-solid'){
                    box = e.target.parentElement;
                }else{
                    box  = e.target;
                }
                
                if(dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                    box.innerHTML = `${box.id} <i class="fa-solid fa-chevron-down"></i>`
                } else{
                    dropdownContent.style.display = "block";
                    box.innerHTML = `${box.id} <i class="fa-solid fa-chevron-up"></i>`
                }
        });
    })
}

export {
    menuToggleFunction,
    showMenuContainer,
    hideMenuContainer
}