/* 

Modesl required:
    - getNoteByID
    - saveNote (also updates)
    - deleteNote

 */


const fs = require('fs');
const jsonMain = fs.readFileSync('notesdb.json');
let notes_json = JSON.parse(jsonMain);


function submitNote(submitObject){

    console.log(submitObject)

    // Load JS file into array(?)
    // Append new object to array
    // Write array to file 
    console.log(typeof(jsonMain));
    console.log(typeof(notes_json))
    let array = notes_json.values
    console.log(array)


}

function getNoteByTitle(finalString){

    console.log(finalString)
    let responseString = notes_json.filter(function(myvar){
        return myvar.title === finalString;
    })
    return responseString;
}

function deleteNote(){

}

function getAllNotes(){
    return notes_json;
    
}


module.exports = {
    getAllNotes,
    getNoteByTitle,
    submitNote
}