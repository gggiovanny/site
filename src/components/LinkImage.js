import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.1); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  /* centers the text */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  :hover ${Overlay} {
    opacity: 1;
  }

  cursor: pointer;
`;

const Image = styled(GatsbyImage)`
  display: block;
  width: 100%;
  height: auto;
`;

const Text = styled.span`
  font-family: 'Raleway', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 2rem;
`;

export const LinkImage = ({ image, alt, text, to }) => {
  return (
    <div>
      <Container to={to}>
        <Image image={image} alt={alt} />
        <Overlay>
          <Text>{text}</Text>
        </Overlay>
      </Container>
    </div>
  );
};
