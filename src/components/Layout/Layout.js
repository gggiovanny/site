import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { Footer } from './Footer';

export const Layout = ({ pageTitle, parentUrl, children, renderUp }) => {
  return (
    <div>
      <header className="pt-12 pb-16 px-4">
        <div className="max-w-screen-lg mx-auto xl:max-w-screen-xl flex flex-row justify-between items-center">
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
      <main className="p-4 max-w-screen-lg mx-auto xl:max-w-screen-xl">
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>
      <Footer renderUp={renderUp} />
    </div>
  );
};
