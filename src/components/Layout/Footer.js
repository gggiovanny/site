import React from 'react';
import { RiGithubFill, RiInstagramLine, RiLinkedinFill } from 'react-icons/ri';

import { author } from '../../utils';
import { FooterContainer } from './styles';

export function Footer() {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
}
