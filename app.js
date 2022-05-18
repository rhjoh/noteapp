const { Http2ServerResponse } = require("http2")

const noteName = document.querySelector('#noteName')
const noteEditor = document.querySelector('#noteEditor')
const submitButton = document.querySelector('#submitButton')
const getNoteButton = document.querySelector('#getNoteButton')
const getAllButton = document.querySelector('#loadAllNotesButton')


function submitNote(){
    console.log("Submit note works")
    console.log(noteName.value);
    console.log(noteEditor.value);
    
    const http = new XMLHttpRequest();
    const url = '/submit';
    http.open('POST', url, true);
    http.setRequestHeader('Content-Type', 'text/plain')
    http.send(noteName.value);
}

function loadNote(){
    console.log("LoadNote Button pressed")

    const http = new XMLHttpRequest();
    const url = '/load';
    http.open('GET', url);
    http.setRequestHeader('Content-Type', 'text/plain');

    http.onreadystatechange = function(){
        if (this.readyState = 4){
            console.log(http.response);
            //console.log(http.responseText);
        }
    }


    http.send();
}

function allNotes(){

    console.log("All notes button")
    const http = new XMLHttpRequest();
    const url = '/loadall';
    http.open('GET', url);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
        if (this.readyState = 4){
            console.log(http.responseText);
        }
    }

    http.send()
}



submitButton.addEventListener("click", submitNote)
getNoteButton.addEventListener('click', loadNote)
getAllButton.addEventListener('click', allNotes);