/* 

Controllers for manual routes in app.js

- Root / index.html
- app / app.js
- submit / POST note 
- load / GET note by ID 

*/


const models = require('./models.js');

const fs = require('fs');
const html_file = fs.readFileSync('index.html');
const js = fs.readFileSync('app.js');

// Remove later, belongs in model. 
const json_file = fs.readFileSync('notesdb.json');

async function getIndex(req, res){
    
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.write(html_file)
    console.log("Initial HTML sent");
    res.end(); 
}


async function getApp(req, res){
    res.setHeader("Content-Type", "text/javascript");
    res.write(js)
    console.log("Sent js file...");
    res.end();
}

async function submitNote(req, res){
    // console.log(req.headers);

    req.on('data', function(mydata){
        console.log(mydata.toString());
    })
}

async function loadNote(req, res){

    res.setHeader('Content-Type', 'text/plain')
    res.writeHead(200);
    res.write("Responding to GET request");
    res.end();
}

// Belongs in model 
async function loadAll(req, res){

    //notes_json = JSON.parse(json_file);

    let test1 = models.getAllNotes()

    console.log("Hitting loadall");
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(test1))

}

module.exports = {
    getIndex,
    getApp,
    submitNote,
    loadNote,
    loadAll
}