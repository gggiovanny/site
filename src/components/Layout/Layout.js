import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

import { author } from '../../utils/config';

const Header = styled.header`
  padding-top: 3rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Raleway', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  /* flex stuff */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  a {
    /* styles that makes links to not look like links */
    text-decoration: none;
    color: inherit;
  }
`;

const LogoContainer = styled.div`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    overflow: hidden;
  }
`;

const Page = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Main = styled.main`
  padding: 1rem;
  max-width: 800px;
`;

export const Layout = ({ pageTitle, children }) => {
  return (
    <Page>
      <Header>
        <LogoContainer>
          <Link to="/">{author.name}</Link>
        </LogoContainer>
        <Nav>
          <ul>
            <li>
              <a href={`mailto:${author.email}`}>@contact</a>
            </li>
          </ul>
        </Nav>
      </Header>
      <Main>
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </Main>
    </Page>
  );
};
