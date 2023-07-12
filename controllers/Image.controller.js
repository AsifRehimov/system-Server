const fs = require('fs');
const path = require('path');

exports.outputFile = (req, res) => {
    const filename = req.params.filename;
    const photoPath = path.join(__dirname, '../public/uploads', filename);
  
    fs.readFile(photoPath, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error retrieving photo');
      }
  
    //   res.setHeader('Content-Type', 'image/jpeg');
      res.send(data);
    });
  }