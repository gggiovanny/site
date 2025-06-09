import React from 'react';

import { Layout, Seo } from '../components';

function IndexPage({ data }) {
  return (
    <Layout>
      <div className="py-24 text-center font-semibold text-6xl font-raleway">
        <div className="flex flex-col items-center justify-center gap-12">
          <p>Hi there, I'm Gio!</p>
          <p>I have two passions: create things with code, and take amazing pictures.</p>
          <p>Are you still here? Cool! I'll show you a bit of what I do.</p>
          <p>
            I do software development for a living, mostly full stack web systems. I have 5 years of
            experience, and I've been told I'm good at it. And I think I do.
          </p>
          <p>
            You can find I pinch of my work in my Github, but most of my career victories where
            doing private code, so sadly I can not show you! But you can check what I've done in my
            Linkedin.
          </p>
          <p>
            You are still here? Nice! I can show you now my most recent passion: take amazing
            pictures! Well, I'm not sure if they are amazing, but I'm doing my best.
          </p>
          <p>
            If you like what you see and wanna see more, don't be shy and follow me on instagram!
            I'll be glad to see you around!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo />;

export default IndexPage;
