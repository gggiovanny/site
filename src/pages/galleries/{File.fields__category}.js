/* eslint-disable jsx-a11y/alt-text */
import 'react-photo-view/dist/react-photo-view.css';

import { graphql, Link } from 'gatsby';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { ImageList, Layout, Seo } from '../../components';

const Photo = imageProps => <img width="100%" height="auto" loading="lazy" {...imageProps} />;

function ImageCategoryPage({ data }) {
  return (
    <Layout>
      <PhotoProvider>
        <ImageList>
          {data.allFile.nodes.map(node => {
            const { publicURL: src, childImageSharp, photoPath } = node;
            const { originalName, srcSet } = childImageSharp.fluid;

            return (
              <PhotoView
                key={node.id}
                src={src} // this is the actual heavy image
                render={() => <Photo srcSet={srcSet} placeholder={originalName} />}
              >
                {/* this is the preview displayed before open the actual heavier image */}
                <Photo srcSet={srcSet} placeholder={originalName} />
              </PhotoView>
            );
          })}
        </ImageList>
      </PhotoProvider>
    </Layout>
  );
}

export const query = graphql`
  query ($fields__category: String) {
    allFile(filter: { fields: { category: { eq: $fields__category } }, name: { ne: "cover" } }) {
      nodes {
        photoPath: gatsbyPath(filePath: "/photos/{File.name}")
        id
        fields {
          category
        }
        publicURL
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
