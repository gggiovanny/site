import React from 'react';

export const ImageList = ({ children }) => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-8 md:max-w-[650px] md:mx-auto">
      {children}
    </section>
  );
};
