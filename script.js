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

function Book(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
}

//loop through array and render results to table 

//reset button






