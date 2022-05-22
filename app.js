const { Http2ServerResponse } = require("http2")

let noteName = document.querySelector('noteName')
let noteEditor = document.querySelector('noteEditor')
const submitButton = document.querySelector('submitButton')
const getNoteButton = document.querySelector('getNoteButton')
const getAllButton = document.querySelector('loadAllNotesButton')


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

    //const curTitle = example1.value;
    const curTitle = document.getElementById('noteName').value;
    const url = '/load' + '?' + curTitle;
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


// Get and parse JSON file, update list elements as note Title.
function allNotes(){
    console.log("All notes button")
    const http = new XMLHttpRequest();
    // Need a variable here (note name) to append to URL. 
    const url = '/loadall';
    http.open('GET', url);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
        if (this.readyState == 4){
            returnedJson = JSON.parse(http.response)
            listElements = document.querySelectorAll('#noteList li')
            listOfNotes = document.querySelector('#noteList');
            
            for(c = 0; c < returnedJson.length; c++){
                listOfNotes.appendChild(createListItems(returnedJson[c].title))

            }

        }
    }

    http.send()
}

function createListItems(title_name){
    let p = document.createElement('li')
    p.innerText = title_name
    return p;
}

submitButton.addEventListener("click", submitNote)
getNoteButton.addEventListener('click', loadNote)
getAllButton.addEventListener('click', allNotes);