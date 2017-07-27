import Head from 'next/head';

import React from 'react';

const PageHead = () => (
  <Head>
    <title>Custom Next.js config</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link type="text/css" rel="stylesheet" href="/static/main.css" />
  </Head>
);

export default PageHead;
