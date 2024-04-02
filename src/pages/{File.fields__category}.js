/* eslint-disable jsx-a11y/alt-text */
import { graphql, Link } from 'gatsby';
import React from 'react';

import { ImageList, Layout, Seo } from '../components';

function ImageCategoryPage({ data }) {
  return (
    <Layout>
      <ImageList>
        {data.allFile.nodes.map(node => {
          const { originalName } = node.childImageSharp.fluid;
          return (
            <Link to={toPhotoNameUrl(node.name)}>
              <img
                key={node.id}
                srcSet={node.childImageSharp.fluid.srcSet}
                placeholder={originalName}
                width="100%"
                height="auto"
                loading="lazy"
              />
            </Link>
          );
        })}
      </ImageList>
    </Layout>
  );
}

function toPhotoNameUrl(photoName) {
  // Returns the unchanged photoName if it only contains digits
  if (/^\d+$/.test(photoName)) return `/${photoName}`;

  // Convert the string to lowercase
  let result = photoName.toLowerCase();

  // Use a regular expression to insert a dash before any digit
  result = result.replace(/(\d)/, '-$1');

  return `/${result}`;
}

export const query = graphql`
  query ($fields__category: String) {
    allFile(filter: { fields: { category: { eq: $fields__category } }, name: { ne: "cover" } }) {
      nodes {
        id
        name
        fields {
          category
        }
        childImageSharp {
          fluid {
            originalName
            srcSet
          }
        }
      }
    }
  }
`;

export const Head = ({ params: { fields__category } }) => <Seo title={fields__category} />;

export default ImageCategoryPage;
