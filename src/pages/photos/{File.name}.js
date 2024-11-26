/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { Layout, Seo } from '../../components';
import NotFoundPage from '../404';

const Description = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: #888;

  // animate color change on hover
  transition: color 0.2s ease;

  &:hover {
    color: #111;
  }
`;

function ImageCategoryPage({ data: { file } }) {
  if (!file?.childImageSharp?.gatsbyImageData) return <NotFoundPage />;

  return (
    <Layout>
      <GatsbyImage image={file.childImageSharp.gatsbyImageData} alt={file.name} />
      <Description>{file.fields.technicalDescription}</Description>
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
        technicalDescription
      }
      childImageSharp {
        gatsbyImageData(width: 4096, placeholder: BLURRED)
      }
    }
  }
`;

export const Head = ({ params: { fields__category } }) => <Seo title={fields__category} />;

export default ImageCategoryPage;
