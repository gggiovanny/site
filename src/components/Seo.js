import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} {title && ' | '} {data.site.siteMetadata.title}
    </title>
  );
};
