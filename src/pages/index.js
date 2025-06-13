import React, { useEffect, useRef, useState } from 'react';

import { Layout, Seo } from '../components';

// RevealCard component for scroll-triggered animations
function RevealCard({ children, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
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

function IndexPage({ data }) {
  const cardClass = 'h-screen';
  return (
    <Layout>
      <div className="font-semibold text-6xl font-raleway">
        <RevealCard className={`bg-gray-50 ${cardClass}`}>
          <p>Hi there, I'm Gio!</p>
        </RevealCard>

        <RevealCard className={`bg-white ${cardClass}`}>
          <p>I have two passions: create things with code, and take amazing pictures.</p>
        </RevealCard>

        <RevealCard className={`bg-gray-50 ${cardClass}`}>
          <p>Are you still here? Cool! I'll show you a bit of what I do.</p>
        </RevealCard>

        <RevealCard className={`bg-white ${cardClass}`}>
          <p>
            I do software development for a living, mostly full stack web systems. I have 5 years of
            experience, and I've been told I'm good at it. And I think I do.
          </p>
        </RevealCard>

        <RevealCard className={`bg-gray-50 ${cardClass}`}>
          <p>
            You can find I pinch of my work in my Github, but most of my career victories where
            doing private code, so sadly I can not show you! But you can check what I've done in my
            Linkedin.
          </p>
        </RevealCard>

        <RevealCard className={`bg-white ${cardClass}`}>
          <p>
            You are still here? Nice! I can show you now my most recent passion: take amazing
            pictures! Well, I'm not sure if they are amazing, but I'm doing my best.
          </p>
        </RevealCard>

        <RevealCard className={`bg-gray-50 ${cardClass}`}>
          <p>
            If you like what you see and wanna see more, don't be shy and follow me on instagram!
            I'll be glad to see you around!
          </p>
        </RevealCard>

        {/* Spacer for better scrolling experience */}
        <div className="h-96 " />
      </div>
    </Layout>
  );
}

export const Head = () => <Seo />;

export default IndexPage;
