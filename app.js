const { Http2ServerResponse } = require("http2")
const { title } = require("process")

let noteName = document.querySelector('noteName')
let noteEditor = document.querySelector('noteEditor')
const submitButton = document.querySelector('submitButton')
const getNoteButton = document.querySelector('getNoteButton')
const getAllButton = document.querySelector('loadAllNotesButton')


function submitNote(){
    
    const noteName = (document.getElementById('noteName')).value
    const noteBody = (document.getElementById('noteEditor')).value

    const savedNote = {
        'title': noteName,
        'message': noteBody
    }

    const http = new XMLHttpRequest();
    const url = '/submit';
    http.open('POST', url, true);
    http.setRequestHeader('Content-Type', 'application/json')
    http.send(JSON.stringify(savedNote));



}

function loadNote(){

    const http = new XMLHttpRequest();

    const curTitle = (document.getElementById('noteName').value).replace(/\s/, '');
    // Strip white space. 
    // TODO: Apply same to save/submit new note function. 
    const url = '/load?' + curTitle;
    

    
    http.open('GET', url, false);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send();
    // http.onreadystatechange doesn't work here. Why?
    let resObject = JSON.parse(http.response);
    // resObject has an index despite the JSON string only having one object?
    const noteBody = (document.getElementById('noteEditor'))
    noteBody.innerText = resObject[0].message
    console.log(resObject)
}


// Get and parse JSON file, update list elements as note Title.
function allNotes(){
    const http = new XMLHttpRequest();
    const url = '/loadall';
    http.open('GET', url);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
        if (this.readyState == 4){
            returnedJson = JSON.parse(http.response)
            listElements = document.querySelectorAll('#noteList li')
            listOfNotes = document.querySelector('#noteList');
            let noteList = document.getElementById('noteList');
            
            for(c = 0; c < returnedJson.length; c++){
                //listOfNotes.appendChild(createListItems(returnedJson[c].title))
                let newElement = document.createElement('li')
                let baseUrl = "load?"
                //newAnchor.setAttribute('href', 'http://msn.com')
                newElement.innerHTML = '<a href=' + baseUrl + returnedJson[c].title + '>' + returnedJson[c].title + '</a>'
                noteList.appendChild(newElement)

            }

        }
    }

    http.send()
}

/* function createListItems(title_name){
    let p = document.createElement('li')
    p.innerText = title_name
    return p;
}
 */
submitButton.addEventListener("click", submitNote)
getNoteButton.addEventListener('click', loadNote)
getAllButton.addEventListener('click', allNotes);