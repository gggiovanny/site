/* eslint-disable jsx-a11y/alt-text */
import { graphql, Link } from 'gatsby';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiDownloadCloudFill, RiExternalLinkFill, RiFileCopyFill } from 'react-icons/ri';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { ImageList, Layout, Seo } from '../../components';
import { useFullUrlBuilder } from '../../hooks';
import { getShareText } from '../../utils/getShareText';
import NotFoundPage from '../404';

// react-photo-view needs a plain "img" to work
const Photo = React.forwardRef((imageProps, ref) => (
  <img ref={ref} width="100%" height="auto" loading="lazy" {...imageProps} />
));

function ImageCategoryPage({ data }) {
  const { nodes } = data.allFile;

  const { getFullUrl } = useFullUrlBuilder();

  if (!nodes[0]?.childImageSharp?.fluid) return <NotFoundPage />;

  const Toolbar = ({ index }) => {
    const node = nodes[index];
    const { photoPath, publicURL } = node;
    const { technicalDescription } = node.fields;
    const fullPhotoUrl = getFullUrl(photoPath);

    return (
      <div className="flex gap-2">
        <CopyToClipboard text={getShareText({ fullPhotoUrl, technicalDescription })}>
          <RiFileCopyFill className="cursor-pointer" />
        </CopyToClipboard>
        <a href={getFullUrl(publicURL)} download>
          <RiDownloadCloudFill />
        </a>
        <RiExternalLinkFill
          onClick={() => window.open(photoPath, '_blank')}
          className="cursor-pointer"
        />
      </div>
    );
  };

  return (
    <Layout parentUrl="/">
      <PhotoProvider toolbarRender={Toolbar}>
        <ImageList>
          {nodes.map(node => {
            if (!node.childImageSharp?.fluid?.srcSet) return null;

            const { childImageSharp } = node;
            const { originalName, srcSet } = childImageSharp.fluid;
            const { src } = childImageSharp.fixed;

            return (
              <PhotoView
                key={node.id}
                src={src} // this is the actual heavy image
              >
                {/* this is the preview displayed before open the actual heavier image */}
                <Photo srcSet={srcSet} placeholder={originalName} className="cursor-pointer" />
              </PhotoView>
            );
          })}
        </ImageList>
      </PhotoProvider>

      <div className="font-raleway text-gray-500 mt-20 flex flex-col justify-center items-center gap-2 cursor-pointer whitespace-pre-wrap">
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑ Back to Top</div>
        <div>
          <Link
            to="/"
            className="text-gray-500 hover:text-black transition-colors duration-200 ease-in-out no-underline"
          >
            ⌂ Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($fields__category: String) {
    allFile(
      filter: { fields: { category: { eq: $fields__category } } }
      sort: { changeTime: DESC }
    ) {
      nodes {
        photoPath: gatsbyPath(filePath: "/photos/{File.name}")
        id
        fields {
          category
          technicalDescription
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
