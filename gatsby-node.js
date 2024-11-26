const ExifReader = require('exifreader');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  const isPhoto = node.internal.type === 'File' &&
    node.internal.mediaType === 'image/jpeg' &&
    node.internal.description?.includes('photos');

  // adds category field
  const category = isPhoto ? node.dir.split('/').at(-1) : null;
  createNodeField({ node, name: 'category', value: category });

  if (!isPhoto) return;

  ExifReader.load(node.absolutePath).then(tags => {
    const v = (k) => tags[k]?.description || '';
    const getModel = () => {
      if (v('Model').includes(v('Make'))) return v('Model');
      return `${v('Make')} ${v('Model')}`;
    }
    const getSoftware = () => {
      if (v('Software').includes(v('Model'))) return 'Sin edición.';
      return `Editado en ${v('Software')}.`;
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

    createNodeField({ node, name: 'technicalDescription', value: technicalDescription });
  });
};


function getFormattedDate(date) {
  if (!date) return '';
  // Format the date as "YYYY/MM/DD"
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}
