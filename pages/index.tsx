import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import clsx from 'clsx';

import Box from 'components/Box';
import SEO from 'components/SEO';
import LinkedInIcon from 'public/icons/linkedin.svg';
import GithubIcon from 'public/icons/github.svg';
import EmailIcon from 'public/icons/email.svg';
import CvIcon from 'public/icons/cv.svg';

import styles from 'styles/pages/homepage.module.css';

const Home: NextPage = () => {
  const [hoverClassName, setHoverClassName] = useState('');

  useEffect(() => {
    addEventListener('mouseover', () => setHoverClassName('removeEffect'));
  }, []);

  return (
    <>
      <SEO />

      <section className={clsx(styles.hero, styles[hoverClassName])}>
        <Box />
        <h2 className={styles.subheading}>Front-end engineer</h2>
        <div className={styles.links}>
          <Link href="https://www.linkedin.com/in/neda-danilevice-19ba4114a">
            <LinkedInIcon className={styles.icon} />
          </Link>
          <Link href="https://github.com/nedakinduryte">
            <GithubIcon className={styles.icon} />
          </Link>
          <Link href="mailto:neda.danilevice@gmail.com">
            <EmailIcon className={styles.icon} />
          </Link>
          <Link href="/Neda-Danilevice-cv.pdf" target="_blank" rel="noopener noreferrer">
            <CvIcon className={styles.icon} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
