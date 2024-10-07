const express = require('express');
const path = require('path');
const app = express();


app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});


app.listen(8081, () => {
    console.log('Server is running on port 8081');
});
