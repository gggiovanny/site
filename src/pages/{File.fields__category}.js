/* eslint-disable jsx-a11y/alt-text */
import { graphql } from 'gatsby';
import React from 'react';

import { ImageList } from '../components/ImageList';
import { Layout } from '../components/Layout/Layout';
import Seo from '../components/Seo';

function ImageCategoryPage({ data }) {
  return (
    <Layout>
      <ImageList>
        {data.allFile.nodes.map(node => {
          const { originalName } = node.childImageSharp.fluid;
          return (
            <img
              key={node.id}
              src={node.publicURL}
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
        publicURL
        childImageSharp {
          fluid {
            originalName
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Gallery" />;

export default ImageCategoryPage;
