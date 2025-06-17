import React from 'react';

import { Layout, Seo } from '../components';
import { RevealCardsLayout } from '../components/RevealCardsLayout';

function IndexPage({ data }) {
  const cardContents = [
    "Hi there, I'm Gio!",
    'I have two passions: create things with code, and take amazing pictures.',
    "Are you still here? Cool! I'll show you a bit of what I do.",
    "I do software development for a living, mostly full stack web systems. I have 5 years of experience, and I've been told I'm good at it. And I think I do.",
    "You can find I pinch of my work in my Github, but most of my career victories where doing private code, so sadly I can not show you! But you can check what I've done in my Linkedin.",
    "You are still here? Nice! I can show you now my most recent passion: take amazing pictures! Well, I'm not sure if they are amazing, but I'm doing my best.",
    "If you like what you see and wanna see more, don't be shy and follow me on instagram! I'll be glad to see you around!",
  ];

  return (
    <Layout>
      <RevealCardsLayout>
        {cardContents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </RevealCardsLayout>
    </Layout>
  );
}

export const Head = () => <Seo />;

export default IndexPage;
