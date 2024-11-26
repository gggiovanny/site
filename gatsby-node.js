exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  const isPhoto = node.internal.type === 'File' &&
    node.internal.mediaType === 'image/jpeg' &&
    node.internal.description?.includes('photos');

  // adds category field
  const category = isPhoto ? node.dir.split('/').at(-1) : null;
  createNodeField({ node, name: 'category', value: category });
};
