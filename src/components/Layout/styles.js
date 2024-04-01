import { css } from '@emotion/react';
import styled from '@emotion/styled';

const centeredContentCss = css`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderContainer = styled.header`
  padding-top: 3rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  }
`;

export const Page = styled.div``;

export const Main = styled.main`
  padding: 1rem;
  ${centeredContentCss}
`;
