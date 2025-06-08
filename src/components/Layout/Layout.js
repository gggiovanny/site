import React from 'react';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ pageTitle, parentUrl, children, renderUp }) => {
  return (
    <div>
      <Navbar parentUrl={parentUrl} />
      <main className="p-4 max-w-screen-lg mx-auto xl:max-w-screen-xl">
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>
      <Footer renderUp={renderUp} />
    </div>
  );
};
