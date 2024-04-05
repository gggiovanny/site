const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, '../src/images/photos/people/');
const watermarkPath = path.join(__dirname, '../src/images/watermark.png');
console.log({ watermarkPath });

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    console.log(file);
    processImage(folderPath, file);
  });
});

function processImage(folderPath, fileName) {
  const originalFilePath = path.join(folderPath, fileName);

  const [basename, extension] = fileName.split('.');
  const newFilePath = path.join(folderPath, `${basename}-watermarked.${extension}`);

  sharp(originalFilePath)
    .composite([{ input: watermarkPath, gravity: 'southeast' }])
    .toFile(newFilePath, (err, info) => {
      if (err) {
        console.error('Error processing image:', err);
      } else {
        console.log('Image processed successfully:', info);
      }
    });
}
