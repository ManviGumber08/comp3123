const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});


// Serve user data from user.json
app.get('/profile', (req, res) => {
    fs.readFile('user.json', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading user data.');
        }
        res.json(JSON.parse(data));
    });
});

// User authentication route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile('user.json', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading user data.');
        }
        const users = JSON.parse(data).users;
        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(401).json({
                status: false,
                message: "User Name is invalid"
            });
        }
        if (user.password !== password) {
            return res.status(401).json({
                status: false,
                message: "Password is invalid"
            });
        }
        res.json({
            status: true,
            message: "User Is valid"
        });
    });
});

// Logout route
app.get('/logout/:username', (req, res) => {
    const username = req.params.username;
    res.send(`<b>${username} successfully logged out.</b>`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
