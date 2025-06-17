import React, { useEffect, useRef, useState } from 'react';

import { RevealCard } from './RevealCard';
import { ScrollHint } from './ScrollHint';

export function RevealCardsLayout({ children }) {
  const cardClass = 'h-screen snap-start';
  const scrollContainerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  const totalCards = children.length; // Number of content cards

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        setVisibleCards(prev => {
          const newVisible = new Set(prev);
          entries.forEach(entry => {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            if (entry.isIntersecting) {
              newVisible.add(cardIndex);
            } else {
              newVisible.delete(cardIndex);
            }
          });
          return newVisible;
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    // Observe all cards after they're rendered
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('[data-card-index]');
      cards.forEach(card => observer.observe(card));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const cardBackgrounds = ['bg-gray-50', 'bg-white'];

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-raleway"
      >
        {children.map((content, index) => (
          <RevealCard
            key={index}
            cardIndex={index}
            isVisible={visibleCards.has(index)}
            className={`${cardBackgrounds[index % 2]} ${cardClass}`}
          >
            {content}
          </RevealCard>
        ))}

        {/* Spacer for better scrolling experience */}
        <div className="h-96 snap-start" />
      </div>

      <ScrollHint
        scrollContainerRef={scrollContainerRef}
        isLastCardVisible={visibleCards.has(totalCards - 1)}
      />
    </div>
  );
}
