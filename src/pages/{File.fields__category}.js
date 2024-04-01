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
          const { src, originalName } = node.childImageSharp.fluid;
          return <img key={node.id} src={src} placeholder={originalName} />;
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
            src
            originalName
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Gallery" />;

export default ImageCategoryPage;
