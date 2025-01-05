const ans = document.querySelector('.answer')
const buttons = document.querySelectorAll('.buttons>div')
const number = document.querySelectorAll('.num')
const ac = document.getElementById('ac');
const sign = document.getElementById('sign');
const mod = document.getElementById('mod');
const divi = document.getElementById('divi');
const mul = document.getElementById('mul');
const sub = document.getElementById('sub');
const add = document.getElementById('add');
const equal = document.getElementById('equal');
const nine = document.getElementById('nine');
const eight = document.getElementById('eight');
const seven = document.getElementById('seven');
const six = document.getElementById('six');
const five = document.getElementById('five');
const four = document.getElementById('four');
const three = document.getElementById('three');
const two = document.getElementById('two');
const one = document.getElementById('one');
const dot = document.getElementById('dot');
const zero = document.getElementById('zero');

let first_var = null, opr = '', second_var = null;
let result = 0, temp='';

buttons.forEach((b) => {
    b.addEventListener('click', (e) => {
        if(e.target.className == 'num'){
            handleNum(e.target);
            console.log(temp);
        }
        else if(e.target.id == 'dot'){
            handleDot();
            console.log(temp);
        }
        else if(e.target.id == 'sign'){
            handleSign();
        }
        else if(e.target.id == 'ac'){
            handleAC(e.target);
        }
        else if(e.target.id == 'equal'){
            handleEqual(e.target);
        }
        else{
            handleOperator(e.target);
        }
    })
})

function handleNum(key){
    if(key.id == 'zero'){
        if(temp != '0' && temp != '') {
            temp = `${temp}` + key.innerHTML;
        }
    }
    else{
        temp = `${temp}` + key.innerHTML;
    }
    if(ans.innerHTML == '0'){
        ans.innerHTML = '';
    }
    ans.innerHTML = ans.innerHTML + key.innerHTML;
}
function handleDot(){
    if(!temp.includes('.')){
        temp += '.';
        ans.innerHTML = ans.innerHTML + '.';
    }
}
function handleSign(){
    if(opr && temp){
        if(temp[0] == '-'){
            let i = ans.innerHTML.slice(0, ans.innerHTML.length-temp.length-2)
            i = i + (-temp) 
            console.log(i)
            temp = temp.slice(1,temp.length)
            ans.innerHTML = i

        }
        else{
            let i = ans.innerHTML.slice(0, ans.innerHTML.length-temp.length)
            i = i + '(' + (-temp) + ')'
            console.log(i)
            temp = '-' + temp
            ans.innerHTML = i
        }
    }
    else if(opr && temp==''){
        if(ans.innerHTML[0] == '-'){
            ans.innerHTML = ans.innerHTML.slice(1,ans.innerHTML.length)
            first_var = first_var.slice(1,first_var.length)
        }
        else{
            first_var = '-' + first_var;
            ans.innerHTML = '-' + ans.innerHTML;
        }
    }
    else{
            if(temp[0] == '-'){
                if(temp.length == 1){
                    temp=''
                }
                temp = temp.slice(1,temp.length);
            }
            else {
                if(ans.innerHTML== '0' || ans.innerHTML=='' ) {
                    temp = '-'
                }
                else {
                    temp = '-' + temp;
                } 
            }
            ans.innerHTML = temp;
        }
}
function handleOperator(key){

    if(opr == ''){
        opr=key.innerHTML;
        first_var = temp;
        temp = '';
        ans.innerHTML = ans.innerHTML + key.innerHTML;
    }
    else{
        if(key.innerHTML != opr){
            console.log('opr : ', opr,'temp : ' , temp);

            ans.innerHTML.replace(opr, key.innerHTML);

            console.log('opr : ', opr,'temp : ' , temp);
            opr=key.innerHTML;
            console.log('opr : ', opr,'temp : ' , temp);
            
        }
    }

}
// function handleDot(key){}
// function handleDot(key){}