/* eslint-disable jsx-a11y/alt-text */
import { graphql } from 'gatsby';
import React from 'react';

import { ImageList, Layout, Seo } from '../components';

function ImageCategoryPage({ data }) {
  return (
    <Layout>
      <ImageList>
        {data.allFile.nodes.map(node => {
          const { originalName } = node.childImageSharp.fluid;
          return (
            <img
              key={node.id}
              srcSet={node.childImageSharp.fluid.srcSet}
              placeholder={originalName}
              width="100%"
              height="auto"
              loading="lazy"
            />
          );
        })}
      </ImageList>
    </Layout>
  );
}

export const query = graphql`
  query ($fields__category: String) {
    allFile(filter: { fields: { category: { eq: $fields__category } }, name: { ne: "cover" } }) {
      nodes {
        id
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
