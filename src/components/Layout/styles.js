import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { cleanLinksCss, gray, mainfontCss } from '../../styles';

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
  ${mainfontCss}
  /* flex stuff */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    ${cleanLinksCss}
  }
`;

export const LogoContainer = styled.div``;

export const Nav = styled.nav`
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

export const FooterContainer = styled.footer`
  ${centeredContentCss}
  ${mainfontCss}

  color: ${gray};
  margin-top: 6rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    ${cleanLinksCss}
  }

  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }

  a {
    font-size: 20px;
  }
`;
