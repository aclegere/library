"use strict";

/*
//Add new book pop up 
const popUp = document.querySelector("#bookBtn");
popUp.addEventListener('click', GetBook)
function GetBook() {
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
}
*/

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

    //whether or not book was read function
    function bookRead() {
        let itsBeenRead = document.getElementById('read');
        if (itsBeenRead.checked){
            return 'Read';
        } else {
            return 'Not Read';
        }
    }
    
    //get last book object from array and render results to table
    function addNewBook(){
        let table = document.getElementById('bookTable');
        let row = table.insertRow();
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let read = row.insertCell(3);
        let readBtn = row.insertCell(4);
        let deleteBtn = row.insertCell(5);
        title.innerHTML = document.getElementById("title").value;
        author.innerHTML = document.getElementById("author").value;
        pages.innerHTML = document.getElementById("pages").value;
        read.innerHTML = bookRead();

        //adding images into cells and adding classes to them so I can add some css hover and click effects 
        readBtn.appendChild(document.createElement('img')).src = 'change.png';
        deleteBtn.appendChild(document.createElement('img')).src = 'delete.png';
        readBtn.className = 'btns';
        deleteBtn.className = 'btns';
        


        //button functionality 
        readBtn.addEventListener('click', function(){
            if (read.innerHTML === "Read"){
                return read.innerHTML = 'Not Read';
            } else {
                return read.innerHTML = 'Read';
            }
        })

        //deletes row from table and object from Library array 
        deleteBtn.addEventListener('click', function(){
            let i = deleteBtn.parentNode.rowIndex;
            table.deleteRow(i);
            myLibrary.pop(i);
        })
        
    }
    
    let lastPosition = myLibrary.length-1;
    addNewBook(lastPosition);
}

//reset button
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function(){
    let confirmAction = confirm('Are you sure you want to reset your library?');
    if (confirmAction) {
        let table = document.getElementById('bookTable');
        let tableHeaderRowCount = 1;
        let rowCount = table.rows.length;
        for (let i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }
        myLibrary = [];
    } else {
        alert('Reset canceled!');
    }
})