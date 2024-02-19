import React, { FC } from 'react';
import Head from 'next/head';

const SEO: FC = () => (
  <Head>
    <title>Neda Danilevice | Software Engineer | Portfolio Site</title>
    <meta
      name="description"
      content="Welcome to my website! If you are here just to look around - that's cool. But if you are looking for an engineer with top-notch experience in web app development - I am always up for a chat."
    ></meta>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    ></meta>
    <meta name="theme-color" content="#fff" />

    <link href="/favicons/favicon-light.ico" rel="icon" media="(prefers-color-scheme: dark)" />
    <link href="/favicons/favicon-dark.ico" rel="icon" media="(prefers-color-scheme: light)" />
  </Head>
);

export default SEO;
