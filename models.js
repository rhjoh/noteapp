/* 

Modesl required:
    - getNoteByID
    - saveNote (also updates)
    - deleteNote

 */


const fs = require('fs');
const jsonMain = fs.readFileSync('notesdb.json');
let notes_json = JSON.parse(jsonMain);


function saveNote(){

}

function getNoteByID(){

}

function deleteNote(){

}

function getAllNotes(){
    return notes_json;
    
}


module.exports = {
    getAllNotes
}