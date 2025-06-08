import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { layout_size_class } from './constants';

export const Navbar = ({ parentUrl }) => {
  return (
    <header className="py-6">
      <div className={`${layout_size_class} flex flex-row justify-between items-center`}>
        <div>
          <Link to="/" className="text-gray-500 hover:text-gray-900 no-underline">
            <StaticImage
              height={40}
              src="../../images/header-logo.svg"
              alt="giovanny.baltazar logo"
            />
          </Link>
        </div>
        <nav>
          <ul className="list-none m-0 overflow-hidden leading-none">
            {parentUrl && (
              <li>
                <Link to={parentUrl} className="text-gray-500 hover:text-gray-900 no-underline">
                  <RiArrowLeftSLine size={40} color="gray" />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
