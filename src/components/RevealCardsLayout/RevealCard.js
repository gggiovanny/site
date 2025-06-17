import React, { useEffect, useRef, useState } from 'react';

export function RevealCard({ children, className = '', isVisible, cardIndex }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div
      ref={cardRef}
      data-card-index={cardIndex}
      className={`h-full w-full flex items-center justify-center px-8 transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : hasAnimated
            ? 'opacity-0 -translate-y-24'
            : 'opacity-0 translate-y-24'
      } ${className}`}
    >
      <div className="max-w-4xl text-center">{children}</div>
    </div>
  );
}
