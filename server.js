// require variables
const express = require('express');
const path = require('path');
const fs =require('fs');


//app variable for express - this is the express app - server
const app = express();

//port to run the server 
const PORT = process.env.PORT ||3001;

//use of middleware- to serve html files. all HTMLs file to send to your users browsers. Use public directory.

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
let notes = require('./Develop/db/db.json');


//get request to parse json
//uses get method to fetch the root pathway - get route for static homepage

app.get('/', (req, res) => res.send('Navigate to /index or /notes'));

//route user to landing page with link to take notes. (request,response) Request is what is sent in. Response is what is sent back.

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//log notes 
app.get('/api/notes',(req,res) => {
  fs.readFile('db/db.json','utf8', (err,data) =>{
    if(err) {
      console.log (err);
      return;
    }
    res.json(notes);
  });
})

//Starts server to begin listening
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});


//Api get
app.get('/api/notes/:id', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

//res.json() allows us to return JSON instead of a buffer. 
app.get('/api/public/:notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf-8',(err,data) => {
    if(err) {
      console.error(err);
    } else{
      //Convert string to JSON object
    const notes = JSON.parse(data);

      //Add a new review
      notes.push(newNote);

      //write back to the file
      fs.writeFile('./db/db.json',JSON.stringify(notes,null))
    
    };
});


// //delete notes 
// app.delete('/api/notes/:deleteNote_id',(req,res)=> {
// res.deleteFile(path.join(_dirname,'public/notes.html'));
// });


// Catch all error code 
app.get("*", (req,res) =>{
  res.sendFile(path.join(_dirname,'pubic/indexhtml'));
});
})