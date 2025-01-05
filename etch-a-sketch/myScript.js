const size = document.getElementById('size')
const container = document.querySelector('.container')
const gridBtn = document.querySelector('.gridView') 
let box = document.querySelectorAll(".box")
let colorSel = document.querySelector('#colorSel')


const eraserBtn = document.querySelector(".eraser")
const keyDisplay = document.querySelector('.keyDisplay')

let eraser = false;
let num = 0;
let gridShow = true;

eraserBtn.addEventListener("click", function (e) {
    if(eraser == false){
        eraser = true;
        eraserBtn.style.backgroundColor = "yellow";
        eraserBtn.style.color = "rgb(15, 17, 88)";
        eraserBtn.style.width = "110%";
        eraserBtn.style.borderBottomRightRadius = "10px";
        eraserBtn.style.borderTopRightRadius = "10px";
    }
    else{
        eraser = false;
        eraserBtn.style.backgroundColor = "rgb(15, 17, 88)";
        eraserBtn.style.color = "yellow";
        eraserBtn.style.width = "100%";
    }
})

function gridShowandHide(){
    if(gridShow == false){
        gridShow = true;
        box.forEach(function(b){
            b.style.boxShadow = ' inset 0 0 1px'
        })
        gridBtn.innerHTML = 'Hide Grid';
        gridBtn.style.backgroundColor = "yellow";
        gridBtn.style.color = "rgb(15, 17, 88)";
        gridBtn.style.width = "110%";
        gridBtn.style.borderBottomRightRadius = "10px";
        gridBtn.style.borderTopRightRadius = "10px";
    }
    else{
        gridShow = false;
        box.forEach(function(b){
            b.style.boxShadow = 'none'
        })
        gridBtn.innerHTML = 'Show Grid';
        gridBtn.style.backgroundColor = "rgb(15, 17, 88)";
        gridBtn.style.color = "yellow";
        gridBtn.style.width = "100%";
    }
}
function verifySize(size){
    if (size <= 0) {
        alert("Size must be between 1 to 150.")
        return false;
    }
    return true;
}
function createDiv(size) {
    container.innerHTML = ''
    for (let i = 0; i < size; i++) {
        for (let i = 0; i < size; i++) {
            const div = document.createElement('div')
            div.setAttribute('class', 'box')
            container.appendChild(div)
        }
    }
    box = document.querySelectorAll(".box")
    // console.log(box);
    box.forEach(function (box) {
        box.style.width = `calc(600px / ${size})`;
        box.style.height = `calc(600px / ${size})`;
    })
}
function colorChange() {
        box.forEach(b => {
            b.addEventListener('click', e => {
                if(eraser == true){
                    e.target.style.backgroundColor = "whitesmoke";
                }
                else{
                    e.target.style.backgroundColor = `${colorSel.value}`;   
                }
            })
            b.addEventListener("mouseover", e => {
                if(e.buttons === 1){ // if user holds click they can 'draw'
                    if(eraser == true){
                        e.target.style.backgroundColor = "whitesmoke";
                    }
                    else{
                        e.target.style.backgroundColor = `${colorSel.value}`;   
                    }
                }
            })
        })
}
function viewKey(key){
    keyDisplay.innerHTML = `${key}`
    keyDisplay.style.visibility  = 'visible' 
    setTimeout(function(){
        keyDisplay.style.visibility  = 'hidden' 
    },500)
}

gridBtn.addEventListener("click", gridShowandHide)
//for just type a number and get grid without click on size input box
window.addEventListener("keydown", function(e){
    //48-57  - Numbers
    //8 - Backspace
    //13 - Enter
    console.log(e.key);

    if(e.keyCode>=48 && e.keyCode<=57){
        if(num<100){
            num = (num*10 )+ Number(e.key);
        }
        size.setAttribute("value", `${num}`)
        viewKey(num)
    }
    else if(e.keyCode === 8){
        if(num>9){
            num = Math.floor(num/10)
        }else{
            num = 0
        }
        Number(e.key);
        size.setAttribute("value", `${num}`)
        viewKey(e.key)
    }
    else if(e.keyCode === 13){
        if(verifySize(num)){
            createDiv(size.value);
        }
        colorChange();
        num = 0;
        viewKey(e.key)
    }
})
size.addEventListener('change', function (e) {
    let size = parseInt(e.target.value)
    
    if(verifySize(size)){
        createDiv(size);
    }
})
createDiv(32);
colorChange();
