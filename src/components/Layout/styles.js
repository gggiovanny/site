import { css } from '@emotion/react';

export const layoutCss = css`
  :root {
    margin: 0;
    background-color: #fff;
    color: #000;
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export const navCss = css`
  border: 1px solid red;
  font-size: 1.5rem;
  color: black;
  padding: 0.25rem;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* flex stuff */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  a {
    /* styles that makes links to not look like links */
    text-decoration: none;
    color: inherit;
  }
`;
