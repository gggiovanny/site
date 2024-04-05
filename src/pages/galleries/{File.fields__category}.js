/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled';
import { graphql, navigate } from 'gatsby';
import React from 'react';
import { RiExternalLinkFill } from 'react-icons/ri';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { ImageList, Layout, Seo } from '../../components';

const Photo = React.forwardRef((imageProps, ref) => (
  <img ref={ref} width="100%" height="auto" loading="lazy" {...imageProps} />
));

const PhotoPreview = styled(Photo)`
  cursor: pointer;
`;

const ToolbarContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function ImageCategoryPage({ data }) {
  const { nodes } = data.allFile;

  const Toolbar = ({ index }) => {
    const node = nodes[index];
    const { photoPath } = node;
    return (
      <ToolbarContainer>
        <RiExternalLinkFill onClick={() => navigate(photoPath)} />
      </ToolbarContainer>
    );
  };

  return (
    <Layout>
      <PhotoProvider toolbarRender={Toolbar}>
        <ImageList>
          {nodes.map(node => {
            const { publicURL: src, childImageSharp } = node;
            const { originalName, srcSet } = childImageSharp.fluid;

            return (
              <PhotoView
                key={node.id}
                src={src} // this is the actual heavy image
                render={() => <Photo srcSet={srcSet} placeholder={originalName} />}
              >
                {/* this is the preview displayed before open the actual heavier image */}
                <PhotoPreview srcSet={srcSet} placeholder={originalName} />
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
