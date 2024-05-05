/* eslint-disable jsx-a11y/alt-text */
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { Layout, Seo } from '../../components';
import NotFoundPage from '../404';

function ImageCategoryPage({ data: { file } }) {
  if (!file) return <NotFoundPage />;

  return (
    <Layout>
      <GatsbyImage image={file.childImageSharp.gatsbyImageData} alt={file.name} />
      {file.name}
    </Layout>
  );
}

export const query = graphql`
  query ($name: String) {
    file(name: { eq: $name }, relativeDirectory: { regex: "/photo/" }) {
      id
      name
      fields {
        category
      }
      childImageSharp {
        gatsbyImageData(width: 4096, placeholder: BLURRED)
      }
    }
  }
`;

export const Head = ({ params: { fields__category } }) => <Seo title={fields__category} />;

export default ImageCategoryPage;
