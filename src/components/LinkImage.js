import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

export const LinkImage = ({ image, alt, text, to }) => {
  return (
    <div>
      <Link
        to={to}
        className="relative flex justify-center items-center w-full h-full cursor-pointer group"
      >
        <GatsbyImage
          image={image}
          alt={alt}
          className="block w-full h-0 pb-[66.6%] object-cover object-center"
        />
        <div className="absolute text-[#f1f1f1] w-full h-full transition-opacity duration-500 ease-in-out opacity-50 group-hover:opacity-100 group-hover:bg-black/10 flex justify-center items-center text-center">
          <span className="font-raleway font-semibold text-2xl">{text}</span>
        </div>
      </Link>
    </div>
  );
};
