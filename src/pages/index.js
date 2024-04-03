import { graphql } from 'gatsby';
import React from 'react';

import { ImageGrid, Layout, LinkImage, Seo } from '../components';

function IndexPage({ data }) {
  return (
    <Layout>
      <ImageGrid>
        {data.allFile.nodes.map(node => {
          const category = node.fields.category;
          return (
            <LinkImage
              key={node.id}
              image={node.childImageSharp.gatsbyImageData}
              text={category}
              alt={`Cover image for${category}`}
              to={node.galleryPath}
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
        galleryPath: gatsbyPath(filePath: "/galleries/{File.fields__category}")
        id
        name
        fields {
          category
        }
        childImageSharp {
          gatsbyImageData(transformOptions: { fit: INSIDE })
        }
      }
    }
  }
`;

export const Head = () => <Seo />;

export default IndexPage;
