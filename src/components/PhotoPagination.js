import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export function PhotoPagination({ category, photoPath, ...rest }) {
  const queryResult = useStaticQuery(graphql`
    query {
      allFile(sort: { changeTime: DESC }) {
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
      <div className="flex gap-4 justify-evenly">
        {previousPhoto && (
          <a href={previousPhoto.photoPath} className="text-base">
            Previous
          </a>
        )}
        {nextPhoto && (
          <a href={nextPhoto.photoPath} className="text-base">
            Next
          </a>
        )}
      </div>
      <div className="flex gap-4 justify-evenly">
        <a href={`/galleries/${category}`} className="text-base">
          Go to gallery
        </a>
      </div>
    </div>
  );
}
