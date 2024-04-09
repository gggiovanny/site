/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiDownloadCloudFill, RiExternalLinkFill, RiFileCopyFill } from 'react-icons/ri';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { ImageList, Layout, Seo } from '../../components';
import { useFullUrlBuilder } from '../../hooks';
import { gray, mainfontCss } from '../../styles';
import NotFoundPage from '../404';

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

const BackToTopContainer = styled.div`
  ${mainfontCss}

  color: ${gray};
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  white-space: pre-wrap;
`;

function ImageCategoryPage({ data }) {
  const { nodes } = data.allFile;

  const { getFullUrl } = useFullUrlBuilder();

  if (!nodes[0]?.childImageSharp) return <NotFoundPage />;

  const Toolbar = ({ index }) => {
    const node = nodes[index];
    const { photoPath, publicURL, childImageSharp } = node;

    return (
      <ToolbarContainer>
        <CopyToClipboard text={getFullUrl(photoPath)}>
          <RiFileCopyFill />
        </CopyToClipboard>
        <a href={getFullUrl(publicURL)} download={childImageSharp.fluid.originalName}>
          <RiDownloadCloudFill />
        </a>
        <RiExternalLinkFill onClick={() => window.open(photoPath, '_blank')} />
      </ToolbarContainer>
    );
  };

  return (
    <Layout parentUrl="/">
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

      <BackToTopContainer>
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span class="arrow">↑</span>
          <span class="preserve-whitespace"> Back to Top</span>
        </div>
      </BackToTopContainer>
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
