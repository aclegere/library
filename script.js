"use strict";

//Add new book pop up 
const popUp = document.querySelector("#bookBtn");
popUp.addEventListener('click', function() {
    let formBox = document.getElementById('formBox');
    let dimmer = document.createElement('div');

    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';

    dimmer.onclick = function(){
        document.body.removeChild(this);   
        formBox.style.visibility = 'hidden';
    }

    document.body.appendChild(dimmer);

    formBox.style.visibility = 'visible';
    formBox.style.top = window.innerHeight/2 - 50 + 'px';
    formBox.style.left = window.innerWidth/2 - 100 + 'px';
    return false;
})

//form submit button and store form info into array 
let myLibrary = [];
const form = document.getElementById('bookForm');
form.addEventListener('submit', callbackFunction);

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    myLibrary.push(formDataObj);

    console.log(formDataObj);
    console.log(myLibrary);
    //loop through array and render results to table 
   
}





//reset button

/* 

 for (let i=0; i<myLibrary.length; i++) {
        let table = document.getElementById('bookTable');
        let row = table.insertRow(1);
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let read = row.insertCell(3);
        title.innerHTML = document.getElementById("title").value;
        author.innerHTML = document.getElementById("author").value;
        pages.innerHTML = document.getElementById("pages").value;
        read = document.getElementById("read");
        
    }
function newBook() {
    
}


function Book(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
}


*/




