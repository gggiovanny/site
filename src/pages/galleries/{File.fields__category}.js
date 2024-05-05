/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiDownloadCloudFill, RiExternalLinkFill, RiFileCopyFill } from 'react-icons/ri';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { ImageList, Layout, Seo } from '../../components';
import { useFullUrlBuilder } from '../../hooks';
import { cleanLinksCss, gray, mainfontCss } from '../../styles';
import NotFoundPage from '../404';

// react-photo-view needs a plain "img" to work
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  white-space: pre-wrap;

  a {
    ${cleanLinksCss}
  }
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
            const { childImageSharp } = node;
            const { originalName, srcSet } = childImageSharp.fluid;
            const { src } = childImageSharp.fixed;

            return (
              <PhotoView
                key={node.id}
                src={src} // this is the actual heavy image
              >
                {/* this is the preview displayed before open the actual heavier image */}
                <PhotoPreview srcSet={srcSet} placeholder={originalName} anuma="PhotoPreview" />
              </PhotoView>
            );
          })}
        </ImageList>
      </PhotoProvider>

      <BackToTopContainer>
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑ Back to Top</div>
        <div>
          <Link to="/">⌂ Return to Home</Link>
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
          fixed(width: 2048) {
            src
          }
        }
      }
    }
  }
`;

export const Head = ({ params: { fields__category } }) => <Seo title={fields__category} />;

export default ImageCategoryPage;
