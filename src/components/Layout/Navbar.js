import { Link } from 'gatsby';
import React from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

export const Navbar = ({ parentUrl }) => {
  return (
    <header className="py-6 font-raleway">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Link to="/" className="">
            about
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
