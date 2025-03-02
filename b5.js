const http = require('http'); 

// Create the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); 
  res.end('Hello, World!'); 
});


server.listen(1337, () => {
  console.log('Server is running on http://localhost:1337'); 
});





//express.js
const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
  res.send('Hello, World!'); 
});

app.listen(1337, () => {
  console.log('Server is running on http://localhost:1337'); 
});
