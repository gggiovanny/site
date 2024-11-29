import styled from '@emotion/styled';
import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { RiDownloadCloudFill, RiExternalLinkFill, RiFileCopyFill } from 'react-icons/ri';

import { useFullUrlBuilder } from '../hooks';
import { getShareText } from '../utils/getShareText';

const ToolbarContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export function PhotoToolbar({
  publicURL,
  downloadName,
  photoPath,
  technicalDescription,
}) {
  const { getFullUrl } = useFullUrlBuilder();
  const fullPhotoUrl = getFullUrl(photoPath);
  const downloadUrl = getFullUrl(publicURL);
  const shareText = getShareText({ fullPhotoUrl, technicalDescription });

  return (
    <ToolbarContainer>
      <CopyToClipboard text={shareText}>
        <RiFileCopyFill />
      </CopyToClipboard>
      <a href={downloadUrl} download={downloadName}>
        <RiDownloadCloudFill />
      </a>
      <RiExternalLinkFill onClick={() => window.open(photoPath, '_blank')} />
    </ToolbarContainer>
  );
}


