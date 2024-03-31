import { Link } from 'gatsby';
import React from 'react';

import { layoutCss, navCss } from './styles';

const authorName = 'Giovanny Baltazar';
const authorEmail = 'giovanny.gonzalez.19@gmail.com';

export const Layout = ({ pageTitle, children }) => {
  return (
    <div css={layoutCss}>
      <nav css={navCss}>
        <ul>
          <li>
            <Link to="/">{authorName}</Link>
          </li>
          <li>
            <a href={`mailto:${authorEmail}`}>Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>
    </div>
  );
};
