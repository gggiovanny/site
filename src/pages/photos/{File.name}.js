/* eslint-disable jsx-a11y/alt-text */
import { graphql } from 'gatsby';
import React, { useEffect } from 'react';

import { Layout, Seo } from '../../components';
import NotFoundPage from '../404';

function ImageCategoryPage({ data: { file } }) {
  if (!file) return <NotFoundPage />;

  return (
    <Layout>
      <img
        key={file.id}
        src={file.childImageSharp.fluid.originalImg}
        placeholder={file.childImageSharp.fluid.originalName}
        width="100%"
        height="auto"
        loading="lazy"
      />
      {file.childImageSharp.fluid.originalName}
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
        fluid {
          originalName
          originalImg
        }
      }
    }
  }
`;

export const Head = ({ params: { fields__category } }) => <Seo title={fields__category} />;

export default ImageCategoryPage;
