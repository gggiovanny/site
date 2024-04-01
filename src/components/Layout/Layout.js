import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { author } from '../../utils/config';
import { Header, HeaderContainer, LogoContainer, Main, Nav, Page } from './styles';

export const Layout = ({ pageTitle, children }) => {
  return (
    <Page>
      <HeaderContainer>
        <Header>
          <LogoContainer>
            <Link to="/">
              <StaticImage
                height={40}
                src="../../images/header-logo.png"
                alt="giovanny.baltazar logo"
              />
            </Link>
          </LogoContainer>
          <Nav>
            <ul>
              <li>
                <a href={`mailto:${author.email}`}>@contact</a>
              </li>
            </ul>
          </Nav>
        </Header>
      </HeaderContainer>
      <Main>
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </Main>
    </Page>
  );
};
