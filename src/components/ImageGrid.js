import React from 'react';

export const ImageGrid = ({ children }) => {
  return <section className="inline-grid grid-cols-3 gap-[16px]">{children}</section>;
};
