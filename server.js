const http = require('http');
const fs = require('fs');
const html_file = fs.readFileSync('index.html');
const js = fs.readFileSync('app.js');

const controllers = require('./controllers.js');
const server = http.createServer(function(req, res){

    // This is where we'll import controller methods for different
    // routes and methods, POST and GET notes by ID etc. 


    if(req.url === '/' && req.method === 'GET') {

        controllers.getIndex(req, res);
    
    } else if (req.url === '/app.js'){

        controllers.getApp(req, res);

    } else if (req.url === '/submit' && req.method === 'POST'){

        controllers.submitNote(req, res);

    } else if (req.url === '/load' && req.method === 'GET'){

        // Need to use regex here to match a URL query and 
        // pass that to the controller function
        controllers.loadNote(req, res, id);

    } else if (req.url.match = && req.method === 'GET'){
        
    } 
    
    
    else if (req.url === '/loadall' && req.method === 'GET'){
        // Testing JSON read functionality.
        controllers.loadAll(req, res);
    }
    
    else {
        console.log("404 Not Found - Bad Request")
        res.writeHead(404);
        res.write("404 Not Found");
    };

})



server.listen(8000);