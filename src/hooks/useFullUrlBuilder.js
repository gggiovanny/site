import { graphql, useStaticQuery } from 'gatsby';

import { getFullUrl } from '../utils';

export const useFullUrlBuilder = () => {
  const queryResult = useStaticQuery(graphql`
    {
      site {
        pathPrefix
      }
    }
  `);

  return { getFullUrl: url => getFullUrl(url, queryResult.site.pathPrefix) };
};
