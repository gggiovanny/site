import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { RiArrowLeftSLine, RiGithubFill, RiInstagramLine, RiLinkedinFill } from 'react-icons/ri';

import { author } from '../../utils';
import { Footer, Header, HeaderContainer, LogoContainer, Main, Nav, Page } from './styles';

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
                    <RiArrowLeftSLine size={40} color="gray" />
                  </Link>
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
      <Footer>
        <span>
          <a href="https://www.instagram.com/giovanny.baltazar" target="_blank" rel="noreferrer">
            <RiInstagramLine size={24} />
          </a>
          <a href="https://github.com/gggiovanny/" target="_blank" rel="noreferrer">
            <RiGithubFill size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/giovanny-gonzalez-baltazar/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinFill size={24} />
          </a>
          <a href="https://gggiovanny.github.io/cv/" target="_blank" rel="noreferrer">
            cv
          </a>
          <a href={`mailto:${author.email}`}>@email</a>
        </span>
      </Footer>
    </Page>
  );
};
