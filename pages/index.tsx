import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Box from 'components/Box';
import LinkedInIcon from 'public/icons/linkedin.svg';
import GithubIcon from 'public/icons/github.svg';
import EmailIcon from 'public/icons/email.svg';
import CvIcon from 'public/icons/cv.svg';

import styles from 'styles/pages/homepage.module.css';

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <Box />
        <h2 className={styles.subheading}>Front-end engineer</h2>
        <div className={styles.links}>
          <Link href="https://www.linkedin.com/in/neda-danilevice-19ba4114a">
            <a>
              <LinkedInIcon className={styles.icon} />
            </a>
          </Link>
          <Link href="https://github.com/nedakinduryte">
            <a>
              <GithubIcon className={styles.icon} />
            </a>
          </Link>
          <Link href="mailto:neda.danilevice@gmail.com">
            <a>
              <EmailIcon className={styles.icon} />
            </a>
          </Link>
          <Link href="/Neda-Danilevice-cv.pdf">
            <a target="_blank" rel="noopener noreferrer">
              <CvIcon className={styles.icon} />
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
