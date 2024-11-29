import styled from '@emotion/styled';
import { graphql, useStaticQuery } from "gatsby";
import React from 'react';

const Link = styled.a`
  font-size: 16px !important;
`;

const LinkRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
`;

export function PhotoPagination({ category, photoPath, ...rest }) {
  const queryResult = useStaticQuery(graphql`
    query {
      allFile(
        sort: { changeTime: DESC }
      ) {
        nodes {
          photoPath: gatsbyPath(filePath: "/photos/{File.name}")
          fields {
            category
          }
        }
      }
    }
  `);


  const categoryPhotos = queryResult.allFile.nodes.filter(n => n.fields.category === category);
  const currentIndex = categoryPhotos.findIndex(n => n.photoPath === photoPath);
  const previousPhoto = categoryPhotos[currentIndex - 1];
  const nextPhoto = categoryPhotos[currentIndex + 1];

  return (
    <div {...rest}>
      <LinkRow>
        {previousPhoto && <Link href={previousPhoto.photoPath}>Previous</Link>}
        {nextPhoto && <Link href={nextPhoto.photoPath}>Next</Link>}
      </LinkRow>
      <LinkRow>
        <Link href={`/galleries/${category}`}>Go to gallery</Link>
      </LinkRow>
    </div>
  )
}
