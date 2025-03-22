// Run this file with `node test.js`

const ExifReader = require('exifreader');

const photoWithoutTags = "/Users/gggiovanny/code/site/src/images/photos/Día de muertos/IMG_7846.jpg";
const photoWithTags = "/Users/gggiovanny/code/site/src/images/photos/Día de muertos/IMG_8255.jpg";
const absolutePath = photoWithTags;

ExifReader.load(absolutePath).then(tags => {
  const v = (k) => tags[k]?.description || '';
  const getModel = () => {
    if (v('Model').includes(v('Make'))) return v('Model');
    return `${v('Make')} ${v('Model')}`;
  }
  const getSoftware = () => {
    if (!v('Software') || v('Software').includes(v('Model'))) return 'Sin edición';
  }

  const technicalDescription = v('FNumber') && [
    v('DateCreated') && `${getFormattedDate(v('DateCreated'))}`,
    `${getModel()}`,
    `Lens ${v('LensModel')}`,
    `${v('FocalLength')}`,
    `${v('FNumber')}`,
    `${v('ExposureTime')} sec.`,
    `ISO ${v('ISOSpeedRatings')}`,
    getSoftware()
  ].filter(Boolean).join(' | ');
  console.log(technicalDescription);

  const customTags = tags.subject?.value?.map((v) => v.description) || [];
  console.log(customTags);
});


function getFormattedDate(date) {
  if (!date) return '';
  // Format the date as "YYYY/MM/DD"
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}