import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { Header, HeaderContainer, LogoContainer, Main, Nav, Page } from './styles';

export const Layout = ({ pageTitle, parentUrl, children }) => {
  return (
    <Page>
      <HeaderContainer>
        <Header>
          <LogoContainer>
            <Link to="/">
              <StaticImage
                height={40}
                src="../../images/header-logo.svg"
                alt="giovanny.baltazar logo"
              />
            </Link>
          </LogoContainer>
          <Nav>
            <ul>
              {parentUrl && (
                <li>
                  <Link to={parentUrl}>
                    <RiArrowLeftSLine size={40} color="black" />
                  </Link>{' '}
                </li>
              )}
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
