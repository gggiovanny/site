/* eslint-disable jsx-a11y/alt-text */
import { graphql } from 'gatsby';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { RiFileCopyFill } from 'react-icons/ri';

import { Layout, Seo } from '../../../components';
import { PhotoPagination } from '../../../components/PhotoPagination';
import { useFullUrlBuilder } from '../../../hooks';
import { getShareText } from '../../../utils/getShareText';
import NotFoundPage from '../../404';

const Photo = React.forwardRef((imageProps, ref) => (
  <img ref={ref} width="100%" height="auto" loading="lazy" {...imageProps} />
));

function ImageCategoryPage({ data: { file } }) {
  const { getFullUrl } = useFullUrlBuilder();
  if (!file?.childImageSharp?.fluid) return <NotFoundPage />;

  const fullPhotoUrl = getFullUrl(file.photoPath);
  const { technicalDescription } = file.fields;
  const photo = file.childImageSharp.fluid;

  return (
    <Layout
      renderUp={() => (
        <PhotoPagination
          category={file.fields.category}
          photoPath={file.photoPath}
          className="mb-4"
        />
      )}
    >
      <div className="flex justify-end mb-2 gap-2 text-[#888]">
        <CopyToClipboard text={getShareText({ fullPhotoUrl, technicalDescription })}>
          <RiFileCopyFill className="cursor-pointer" />
        </CopyToClipboard>
      </div>
      <Photo srcSet={photo.srcSet} placeholder={photo.originalName} />
      <div className="mt-4 text-center text-[#888] transition-colors duration-200 ease-in-out hover:text-[#111]">
        {file.fields.technicalDescription}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($name: String) {
    file(name: { eq: $name }, relativeDirectory: { regex: "/photo/" }) {
      id
      photoPath: gatsbyPath(filePath: "/collections/shots/{File.name}")
      fields {
        category
        technicalDescription
      }
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
