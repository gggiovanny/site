import React from 'react';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

const layout_size_class = 'max-w-screen-lg mx-auto xl:max-w-screen-xl px-6';

export const Layout = ({ pageTitle, parentUrl, children, renderUp }) => {
  return (
    <div className={layout_size_class}>
      <Navbar parentUrl={parentUrl} />
      <main>
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>
      <Footer renderUp={renderUp} />
    </div>
  );
};
