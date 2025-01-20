const container = document.querySelector('.container')
const addBookBtn = document.querySelector('.addBookBtn')
const form = document.querySelector('.bookForm')
const allInputs = document.querySelectorAll('input')

const inputName = document.getElementById('inputName')
const inputAuthor = document.getElementById('inputAuthor')
const inputPages = document.getElementById('inputPages')
const inputImg = document.getElementById('inputImg')
const inputLanguage = document.getElementById('inputLanguage');
const radio = document.getElementsByName('readStatus');


function Book(imageSrc, name, Author, language, pages, readStatus){
    this.imageSrc = imageSrc;
    this.name = name;
    this.Author = Author;
    this.language = language;
    this.pages = pages;
    this.readStatus = readStatus;
}

let myLibrary = [];

function toggleBtns(b) {
            if(b.classList.contains('readBtn')){
                b.classList.remove('readBtn');
                b.classList.add('notReadBtn');
                b.innerText = 'Not Read Yet';
            }
            else{
                b.setAttribute('class', 'readBtn');
                b.innerText = 'Already Read';    
            }
}
function addBooktoLibrary(){
    // img input
    const file = inputImg.files[0];
    let src = readStatusInput = undefined;
    //dropdown input
    const language = inputLanguage.options[inputLanguage.selectedIndex].text;

    //radio btn input
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked)
            readStatusInput = radio[i].value;
    }

    if(file){
        const reader = new FileReader();
        reader.onload = function(e){    
            src = e.target.result;
            console.log(inputAuthor.value);
            console.log(inputPages.value);
            
            let newBook = new Book(src, inputName.value, inputAuthor.value, language, inputPages.value, readStatusInput);
            myLibrary.push(newBook);

            displayBooks();
            resetFields();
        }
        reader.readAsDataURL(file);
    }
    else{
        let newBook = new Book('img/def-book.png', inputName.value, inputAuthor.value, language, inputPages.value, readStatusInput);
        myLibrary.push(newBook);

        displayBooks();
        resetFields();
    }

}
function resetFields(){
    //reset form fields
    inputImg.value = '';
    inputName.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    inputLanguage.selectedIndex = 0;   //Reset the language dropdown to the first option
    radio.forEach((i)=>{
        i.checked = false;  //uncheck all radio btns
    })
}
function  displayBooks(){
    // myLibrary.push(new Book('img/bhagat-singh.jpg', 'why i am...', 'Bhagat singh', 'english', 120, 'Already Read'))
    let  i = myLibrary[myLibrary.length - 1];
    let card = document.createElement('div');
    card.setAttribute('class',  'card');
    let temp;
    if(i.readStatus==='Already Read'){
        temp= 'readBtn';
    }else{
        temp= 'notReadBtn';
    }

    card.innerHTML = `
        <img src="${i.imageSrc}" alt="" class="bookImg">
        <div class="bookDetails">
            <p class="bookName">${i.name}</p>
            <table>
                <tr>
                    <td>
                        <p>Author </p>
                    </td>
                    <td>
                        <p class="author">${i.Author}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Language</p>
                    </td>
                    <td>
                        <p class="language">${i.language}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Pages</p>
                    </td>
                    <td>
                        <p class="pages">${i.pages}</p>
                    </td>
                </tr>
            </table>
            <button type="button" class=${temp}>${i.readStatus}</button>
        </div>
    `
    container.appendChild(card);    
}



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addBooktoLibrary();
    form.style.display = 'none';
});

addBookBtn.addEventListener('click', ()=>{
    if(form.style.display === 'none' || form.style.display === ''){
        form.style.display = 'block';
    }
    else{
        form.style.display = 'none';
    }
});

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('readBtn') || e.target.classList.contains('notReadBtn')){
        toggleBtns(e.target);
    }
});
