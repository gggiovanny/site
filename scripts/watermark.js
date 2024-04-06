/* eslint-disable no-console */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const photosPath = path.join(__dirname, '../src/images/photos');
const watermarkPath = path.join(__dirname, '../src/images/watermark.png');

console.log(`Adding watermark located at ${watermarkPath}...`);

eachFile(photosPath, galleryFolder => {
  const galleryPath = path.join(photosPath, galleryFolder);
  eachFile(galleryPath, photoName => {
    processImage(galleryPath, photoName);
  });
});

function eachFile(dir, loopCallback) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      loopCallback(file);
    });
  });
}

function processImage(galleryPath, photoName) {
  if (photoName === 'cover.jpg') return;

  const originalFilePath = path.join(galleryPath, photoName);

  const [basename, extension] = photoName.split('.');
  const newFilePath = path.join(galleryPath, `${basename}-watermarked.${extension}`);

  sharp(originalFilePath)
    .composite([{ input: watermarkPath, gravity: 'southeast' }])
    .toFile(newFilePath, (err, info) => {
      if (err) {
        console.error(`Error processing image ${originalFilePath}:`, err);
      } else {
        console.log('Image processed successfully:', { originalFilePath, ...info });
      }
    });
}
