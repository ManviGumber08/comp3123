// add.js
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');


if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Created Logs directory.');
}


process.chdir(logsDir);


for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}.`, 'utf8');
    console.log(`Creating  file ${fileName}`);
}
