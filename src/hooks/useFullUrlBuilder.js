import { graphql, useStaticQuery } from 'gatsby';

import { getFullUrl } from '../utils';

export const useFullUrlBuilder = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        pathPrefix
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const isBrowser = typeof window !== "undefined"
  const siteUrl = isBrowser ? window.location.origin : result.site.siteMetadata.siteUrl

  return { getFullUrl: url => getFullUrl(url, result.site.pathPrefix, siteUrl) };
};
