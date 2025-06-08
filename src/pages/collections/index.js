import { graphql } from 'gatsby';
import React from 'react';

import { ImageGrid, Layout, LinkImage, Seo } from '../../components';

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
              alt={`Cover image for ${category}`}
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
    allFile(
      filter: { relativeDirectory: { regex: "/photos/" }, fields: { tags: { in: "cover" } } }
      sort: { changeTime: DESC }
    ) {
      nodes {
        galleryPath: gatsbyPath(filePath: "/collections/{File.fields__category}")
        id
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
