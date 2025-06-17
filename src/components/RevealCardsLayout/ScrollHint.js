import React from 'react';
import { HiChevronDown } from 'react-icons/hi';

export function ScrollHint({ scrollContainerRef, isLastCardVisible }) {
  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  // Hide arrow when the last card is visible
  if (isLastCardVisible) return null;

  return (
    <button
      onClick={handleScrollDown}
      className="fixed bottom-0 left-0 w-full h-32 flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-300 z-10"
      aria-label="Scroll down"
    >
      <HiChevronDown className="w-10 h-10 text-gray-800 animate-bounce" />
    </button>
  );
}
