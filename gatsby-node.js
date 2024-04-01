exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === 'File' &&
    node.internal.mediaType === 'image/jpeg' &&
    node.internal.description?.includes('photos')
  ) {
    createNodeField({
      node,
      name: 'category',
      value: node.dir.split('/').at(-1),
    });
  } else {
    createNodeField({
      node,
      name: 'category',
      value: null,
    });
  }
};
