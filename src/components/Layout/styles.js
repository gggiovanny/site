import { css } from '@emotion/react';
import styled from '@emotion/styled';

const centeredContentCss = css`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1800px) {
    max-width: 1600px;
  }
`;

export const HeaderContainer = styled.header`
  padding-top: 3rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Header = styled.div`
  ${centeredContentCss}

  font-family: 'Raleway', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 1.2rem;
  /* flex stuff */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    /* styles that makes links to not look like links */
    text-decoration: none;
    color: inherit;
  }
`;

export const LogoContainer = styled.div``;

export const Nav = styled.nav`
  li {
    color: #aaa;
    transition: color 0.2s ease;
  }

  li:hover {
    color: #111;
  }

  ul {
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    line-height: 0;
  }
`;

export const Page = styled.div``;

export const Main = styled.main`
  padding: 1rem;
  ${centeredContentCss}
`;
