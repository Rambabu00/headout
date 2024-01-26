const fs = require('fs');
const path = require('path');
const dataDirectory = './tmp/data/';
process.env.NODE_OPTIONS = "--max-old-space-size=2048";
// Ensure the data directory exists
if (!fs.existsSync(dataDirectory)) {
  fs.mkdirSync(dataDirectory);
}

// Function to generate random text with a given size
function generateRandomText(sizeInBytes) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomText = '';
  const charsetLength = charset.length;

  for (let i = 0; i < sizeInBytes; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    randomText += charset.charAt(randomIndex);
  }

  return randomText;
}

// Function to create a file with random content
function createRandomFile(filePath, fileSizeInMB) {
    const fileSizeInBytes = fileSizeInMB * 1024 * 1024;
    const chunkSize = 10 * 1024 * 1024; // 10MB chunks
  
    const fileStream = fs.createWriteStream(filePath);
  
    for (let i = 0; i < fileSizeInBytes; i += chunkSize) {
      const randomText = generateRandomText(Math.min(chunkSize, fileSizeInBytes - i));
      fileStream.write(randomText, 'utf8');
    }
  
    fileStream.end();
  }

// Generate 30 files with random content (1MB each iam creating you can pass 100MB for this u need to pass 100 instead 1 in createRandomFile function as a parameter )
for (let i = 1; i <= 30; i++) {
  const fileName = `${i}.txt`;
  const filePath = path.join(dataDirectory, fileName);

  createRandomFile(filePath, 1);
}

console.log('Files generated successfully.');
