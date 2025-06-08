import React from 'react';

import { Layout, Seo } from '../components';

function IndexPage({ data }) {
  return (
    <Layout>
      <div>Holi</div>
    </Layout>
  );
}

export const Head = () => <Seo />;

export default IndexPage;
