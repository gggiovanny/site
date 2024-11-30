/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { RiDownloadCloudFill, RiFileCopyFill } from 'react-icons/ri';

import { Layout, Seo } from '../../components';
import { PhotoPagination } from '../../components/PhotoPagination';
import { useFullUrlBuilder } from '../../hooks';
import { getShareText } from '../../utils/getShareText';
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

const StyledPhotoPagination = styled(PhotoPagination)`
  margin-bottom: 1rem;
`;

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
  color: #888;
  a {
    color: #888;
  }
`;

const Photo = React.forwardRef((imageProps, ref) => (
  <img ref={ref} width="100%" height="auto" loading="lazy" {...imageProps} />
));

function ImageCategoryPage({ data: { file } }) {
  const { getFullUrl } = useFullUrlBuilder();
  if (!file?.childImageSharp?.fluid) return <NotFoundPage />;

  const fullPhotoUrl = getFullUrl(file.photoPath);
  const { technicalDescription } = file.fields;
  const { publicURL } = file;
  const photo = file.childImageSharp.fluid;

  return (
    <Layout renderUp={() => <StyledPhotoPagination category={file.fields.category} photoPath={file.photoPath} />}>

      <ToolbarContainer>
        <CopyToClipboard text={getShareText({ fullPhotoUrl, technicalDescription })}>
          <RiFileCopyFill />
        </CopyToClipboard>
        <a href={getFullUrl(publicURL)} download>
          <RiDownloadCloudFill />
        </a>
      </ToolbarContainer>
      <Photo srcSet={photo.srcSet} placeholder={photo.originalName} />
      <Description>{file.fields.technicalDescription}</Description>
    </Layout>
  );
}

export const query = graphql`
  query ($name: String) {
    file(name: { eq: $name }, relativeDirectory: { regex: "/photo/" }) {
      id
      photoPath: gatsbyPath(filePath: "/photos/{File.name}")
      fields {
        category
        technicalDescription
      }
      publicURL
      childImageSharp {
        fluid {
          srcSet
          originalName
        }
      }
    }
  }
`;

export const Head = ({ params: { fields__category } }) => <Seo title={fields__category} />;

export default ImageCategoryPage;
