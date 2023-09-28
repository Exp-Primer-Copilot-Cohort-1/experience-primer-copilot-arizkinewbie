// Create web server
// 1. Create a web server
// 2. Create a route
// 3. Read the comments from the file
// 4. Return the comments as a response

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route
app.get('/', function(req, res) {
    res.send('Hello world!');
});

// 3. Read the comments from the file
const fs = require('fs');
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// 4. Return the comments as a response
app.get('/comments', function(req, res) {
    res.json(comments);
});

// 5. Start the server
app.listen(3000, function() {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});