const ans = document.querySelector('.answer')
const buttons = document.querySelectorAll('.buttons>div')
const number = document.querySelectorAll('.num')
const zero = document.getElementById('zero')
const sub = document.getElementById('sub')
const mul = document.getElementById('mul')
const divi = document.getElementById('divi')
const mod = document.getElementById('mod')
const add = document.getElementById('add')

let first_var = opr = second_var = '';
let result = temp = '0'; 
console.log(sub, mul, divi, mod, add);


function handleNum(key){
    if(ans.innerHTML == 0){
        ans.innerHTML = '';
        temp = '';
    }

    if(key.innerHTML == '0'){
        if(temp != '0' && temp != '') {
            temp = `${temp}` + key.innerHTML;
        }
    }
    else{
        temp = `${temp}` + key.innerHTML;
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
            temp = temp.slice(1,temp.length)
            ans.innerHTML = i
        }
        else{
            let i = ans.innerHTML.slice(0, ans.innerHTML.length-temp.length)
            i = i + '(' + (-temp) + ')'
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
        first_var = temp;
        temp = '';
        opr = key;
        ans.innerHTML = ans.innerHTML + key;
    }
    else if(first_var && opr && temp == ''){
            ans.innerHTML = ans.innerHTML.slice(0, -1) + key;
            opr=key;
    }
}
function handleAC(){
    temp=''
    ans.innerHTML = '0'
    first_var = null
    opr = ''
    second_var = null
    result=0
}
function handleEqual(){
    second_var=temp
    if(second_var == ''){
        result=first_var;
    }    
    else{
        result = (function(){ 
            return new Function('return ' +first_var + opr + second_var)()})();
        result = parseFloat(result.toFixed(3)); 
    }
    ans.innerHTML = temp = result;
}
function restart(){
    opr = first_var = second_var = '';
    temp = '0';
    ans.innerHTML = '0'
}
buttons.forEach((b) => {
    b.addEventListener('click', (e) => {
        if(second_var) restart();
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
            handleAC();
        }
        else if(e.target.id == 'equal'){
            handleEqual();
        }
        else{
            handleOperator(e.target.innerHTML);
        }
        console.log('first_var :', first_var, 'opr : ', opr, 'second_var :', second_var);
        
    })
})
window.addEventListener("keydown", function(e){
    //48-57  - Numbers
    //8 - Backspace
    //13 - Enter
    // console.log(e.key);
    if(second_var)  restart();

    if(e.shiftKey){
        if(e.key === '%'){          //shift + '5'
            handleOperator(e.key);
        }
        else if( e.key === '*'){          //shift + '8'
            handleOperator('*');
        }
        else if( e.key === '+'){          //shift + '='
            handleOperator('+');
        }
    }
    else if(e.key>='1' && e.key<='9'){    //number
        if(ans.innerHTML == '0'){
            ans.innerHTML = '';
            temp = '';
        }
        ans.innerHTML = ans.innerHTML + e.key; 
        temp = `${temp}` + e.key;
    }
    else if(e.key == '0'){                      //zero
        if(ans.innerHTML == '0'){
            ans.innerHTML = '';
            temp = '0';
        }
        else {
            temp = `${temp}` + '0';
        }
        ans.innerHTML = ans.innerHTML + e.key;
    }
    else if(e.key == 's' || e.key == 'S'){      // Sign change '+/-'
        handleSign();
    }
    else if(e.key == '.'){      // '.'
        handleDot();
    }
    else if(e.key == '-'){      // '-'
        handleOperator('-');
    }
    else if(e.key == '/'){      // '/'
        handleOperator('/');
    }
    else if(e.key === 'Enter' || e.key == '='){
        handleEqual();
    }
    else if(e.key === 'Backspace'){
        if(first_var && opr && temp){
            temp = temp.slice(0, -1);
        }
        else if(first_var && opr){
            opr=''
        }
        else if(first_var){
            first_var = first_var.slice(0, -1)
        }
        else if(temp){
            temp = temp.slice(0, -1)
        }
        ans.innerHTML = ans.innerHTML.slice(0, -1);
    }
    console.log('temp : ', temp);
    console.log('first_var :', first_var, 'opr : ', opr, 'second_var :', second_var);
})