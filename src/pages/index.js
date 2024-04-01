import React from 'react';

import { Layout } from '../components/Layout/Layout';
import Seo from '../components/Seo';

function IndexPage() {
  return <Layout>This is the main page</Layout>;
}

export const Head = () => <Seo />;

export default IndexPage;
