// remove.js
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');


if (fs.existsSync(logsDir)) {
   
    const files = fs.readdirSync(logsDir);
    

    files.forEach(file => {
        console.log(`Delete files ${file}`);
        fs.unlinkSync(path.join(logsDir, file)); 
    });


    fs.rmdirSync(logsDir);
    console.log('Deleting Logs directory.');
} else {
    console.log('Logs directory does not exist.');
}
