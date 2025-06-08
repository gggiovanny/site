import { Link } from 'gatsby';
import React from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

export const Navbar = ({ parentUrl }) => {
  return (
    <header className="py-6 font-raleway">
      <nav className="flex flex-row items-center justify-between" aria-label="Main navigation">
        <div>
          <Link className="text-xl font-bold" to="/">
            Giovanny Gonzalez
          </Link>
        </div>
        <ul className="flex flex-row gap-3 font-semibold list-none m-0 p-0">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/collections">Galleries</Link>
          </li>
          <li className={parentUrl ? 'opacity-100' : 'opacity-0 pointer-events-none'}>
            <Link
              to={parentUrl}
              className="text-gray-500 hover:text-gray-900 no-underline"
              aria-label="Back"
            >
              <RiArrowLeftSLine size={24} color="gray" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
