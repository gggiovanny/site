/* eslint-disable no-console */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const photosPath = path.join(__dirname, '../src/images/photos');
const watermarkPath = path.join(__dirname, '../src/images/watermark.png');

const addWatermark = (originalFilePath, newFilePath) =>
  new Promise((resolve, reject) => {
    sharp(originalFilePath)
      .composite([{ input: watermarkPath, gravity: 'southeast' }])
      .toFile(newFilePath, (err, info) => {
        if (err) {
          console.error(`Error processing image ${originalFilePath}:`, err);
          reject();
        } else {
          console.log('Image processed successfully:', { originalFilePath, ...info });
          resolve();
        }
      });
  });

async function processImage(galleryPath, photoName) {
  if (photoName === 'cover.jpg') return;

  const originalFilePath = path.join(galleryPath, photoName);

  const [basename, extension] = photoName.split('.');
  const newFilePath = path.join(galleryPath, `${basename}-watermarked.${extension}`);

  await addWatermark(originalFilePath, newFilePath);
  fs.unlinkSync(originalFilePath);
  fs.renameSync(newFilePath, originalFilePath);
}

const getPhotoPaths = () =>
  fs
    .readdirSync(photosPath)
    .map(galleryFolder => {
      const galleryPath = path.join(photosPath, galleryFolder);
      return fs.readdirSync(galleryPath).map(photoName => ({
        galleryPath,
        photoName,
      }));
    })
    .flat();

async function main() {
  const processImagePromises = getPhotoPaths().map(({ galleryPath, photoName }) =>
    processImage(galleryPath, photoName)
  );

  await Promise.allSettled(processImagePromises);
}

main();
