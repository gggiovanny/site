import { css } from '@emotion/react';

import { gray } from './colors';

export const cleanLinksCss = css`
  /* styles that makes links to not look like links */
  text-decoration: none;
  color: ${gray};
  transition: color 0.2s ease;

  &:hover {
    color: #111;
  }
`;
