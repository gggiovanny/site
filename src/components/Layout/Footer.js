import React from 'react';
import { RiCodeSSlashFill, RiGithubFill, RiInstagramLine, RiLinkedinFill } from 'react-icons/ri';

import { author } from '../../utils';

export function Footer({ renderUp }) {
  return (
    <footer className="max-w-screen-lg mx-auto xl:max-w-screen-xl font-raleway text-gray-500 mt-24 mb-8 flex flex-col items-center gap-4">
      {renderUp && renderUp()}
      <span className="w-full flex flex-row justify-center gap-8">
        <a
          href="https://www.instagram.com/giovanny.baltazar"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-900 no-underline text-2xl"
        >
          <RiInstagramLine size={24} />
        </a>
        <a
          href="https://github.com/gggiovanny/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-900 no-underline text-2xl"
        >
          <RiGithubFill size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/giovanny-gonzalez-baltazar/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-900 no-underline text-2xl"
        >
          <RiLinkedinFill size={24} />
        </a>
        <a
          href="https://gggiovanny.github.io/cv/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-900 no-underline text-2xl"
        >
          cv
        </a>
        <a
          href={`mailto:${author.email}`}
          className="text-gray-500 hover:text-gray-900 no-underline text-2xl"
        >
          @email
        </a>
      </span>
      <span className="w-full flex flex-row justify-center gap-8">
        <a
          href="https://github.com/gggiovanny/site"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-900 no-underline text-xl"
        >
          <div className="flex flex-row items-center gap-1 text-base">
            <RiCodeSSlashFill size={20} />
            source code
          </div>
        </a>
      </span>
    </footer>
  );
}
