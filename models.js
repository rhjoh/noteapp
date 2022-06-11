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

    let highestID;
    // Find highest ID of all objects. Use that +1 for next obj.
    for(var i=0; i < notes_json.length; i++){
        let idValue = notes_json[i].id

        if(idValue > 0){
            highestID = idValue;
        }
    }
    let newIDval = Number(highestID) + Number(1);
    console.log("New highest ID will be: ")
    console.log(newIDval)
    console.log(submitObject)

    let newObject = {
        'id': String(newIDval),
        'title': submitObject.title,
        'message': submitObject.message
    }
    notes_json.push(newObject);
    let finalString = JSON.stringify(notes_json)
    fs.writeFileSync('notesdb.json', finalString, function(){
        console.log("Error writing file");
        console.log(err)
    })
}

function getNoteByTitle(finalString){

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