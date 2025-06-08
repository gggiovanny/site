import React from 'react';

import { layout_size_class } from './constants';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ pageTitle, parentUrl, children, renderUp }) => {
  return (
    <div>
      <Navbar parentUrl={parentUrl} />
      <main className={`${layout_size_class} p-4 pt-0`}>
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>
      <Footer renderUp={renderUp} />
    </div>
  );
};
