// require variables
const express = require('express');
const path = require('path');
const fs =require('fs');


//app variable for express - this is the express app - server
const app = express();
//port to run the server 
const noteData = require('./Develop/db/db.json');
const PORT = 3001;

//use of middleware-serve html files. all HTMLs file to send to your users browsers. Use public directory.
app.use(express.static('public'));
//get request to parse json
//uses get method to fetch the root pathway - get route for static homepage

app.get('/', (req, res) => res.send('Navigate to /index or /notes'));

//route user to landing page with link to take notes. (request,response) Request is what is sent in. Response is what is sent back.

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/api/notes', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});
//res.json() allowa us to return JSON instead of a buffer. 
app.get('/api/public/:notes', (req, res) => res.json(noteData));

  const noteTracker = req.params.notes.delete();

for (let i = 0; i < noteData.length; i++) {
  const element = array[i];
  
}

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// app.delete('/api/notes/:deleteNote_id',(req,res)=>
// res.deleteFile(path.join(_dirname,'public/notes.html'))

// )


