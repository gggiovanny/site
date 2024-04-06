import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const Overlay = styled.div`
  position: absolute;
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

  opacity: 0.5;
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
    background: rgba(0, 0, 0, 0.1); /* Black see-through */
  }

  cursor: pointer;
`;

const Image = styled(GatsbyImage)`
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 66.6%; // this controls the aspect ratio
  object-fit: cover;
  object-position: center;
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
