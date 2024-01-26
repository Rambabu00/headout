const fs = require('fs');
const path = require('path');
const dataDirectory = './tmp/data/';
const getData = async (req, res) =>{
    const fileName = req.query.n;
    const lineNumber = req.query.m;
    if (!fileName) {
        return res.status(400).json({ error: 'File name (n) is required.' });
      }
      else{
        const filePath = path.join(dataDirectory, `${fileName}.txt`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found.' });
  }
  else{
    if (lineNumber) {
        // Read specific line from the file
        const fileContent = fs.readFileSync(filePath, 'utf8');
 
        const lines = fileContent.split('\n');
        console.log(lines.length)

        let lineContent= lines[lineNumber - 1] || null;
        return res.send({ content: lineContent });
      }
      else{
         
            // Read entire file
            const fileContent = fs.readFileSync(filePath, 'utf8');
            return res.send({ content: fileContent });
          
      }
  }
      }
}
 module.exports={getData}