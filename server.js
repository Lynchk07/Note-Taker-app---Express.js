// require variables
const express = require('express');
const path = require('path');
const api = require('./server.js');

//port to run the server 
const PORT = 3001;
//app variable for express
const app = express();

app.use(express.static('public'));
//get request to parse json


app.get('/', (req, res) => res.send('Navigate to /index or /notes'));

//route user to landing page with link to take notes

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/public', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// app.delete('/api/notes/:id',(req,res)=>
// res.deleteFile(path.join(_dirname,'public/notes.html'))

// )