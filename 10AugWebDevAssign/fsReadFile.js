// Promised version of fs.readFile

const fs = require('fs');

function readFilePromise(filePath, options = {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Sample example to use above function
async function readAndLogFile(filePath, encoding = 'utf8') {
  try {
    const content = await readFilePromise(filePath, { encoding });
    console.log('File content:', content);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

// Example calls
readAndLogFile('example.txt');
readAndLogFile('example.json', 'utf8');
readAndLogFile('image.png', null);