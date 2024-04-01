import { graphql } from 'gatsby';
import React from 'react';

import { ImageGrid } from '../components/ImageGrid';
import { Layout } from '../components/Layout/Layout';
import { LinkImage } from '../components/LinkImage';
import Seo from '../components/Seo';

function IndexPage({ data }) {
  return (
    <Layout>
      <ImageGrid>
        {data.allFile.nodes.map(node => {
          const category = node.dir.split('/').at(-1);
          return (
            <LinkImage
              image={node.childImageSharp.gatsbyImageData}
              text={category}
              alt={`Cover image for${category}`}
            />
          );
        })}
      </ImageGrid>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { regex: "/photos/" }, name: { eq: "cover" } }) {
      nodes {
        id
        name
        dir
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export const Head = () => <Seo />;

export default IndexPage;
