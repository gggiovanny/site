import React from 'react';

import { Layout, Seo } from '../components';
import { RevealCardsLayout } from '../components/RevealCardsLayout';

function IndexPage({ data }) {
  return (
    <Layout>
      <RevealCardsLayout>
        <p>Hi there, I'm Gio!</p>
        <p>I have two passions: create things with code, and take amazing pictures.</p>
        <p>I do software development for a living, mostly full stack web systems.</p>
        <p>
          You can find I pinch of my work in <a href="https://github.com/gggiovanny/">my Github</a>,
          but most of my career victories where doing private code, so sadly I can not show you! But
          you can check what I've done in{' '}
          <a href="https://www.linkedin.com/in/giovanny-gonzalez-baltazar/">my Linkedin</a>.
        </p>
        <p>
          You are still here? Nice! I can show you now my most recent passion: take amazing
          pictures! Well, I'm not sure if they are amazing, but I'm doing my best.
        </p>
        <p>
          If you like what you see and wanna see more, don't be shy and follow me on{' '}
          <a href="https://www.instagram.com/giovanny.baltazar">instagram</a>! I'll be glad to see
          you around!
        </p>
      </RevealCardsLayout>
    </Layout>
  );
}

export const Head = () => <Seo />;

export default IndexPage;
