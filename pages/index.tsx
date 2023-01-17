import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import Box from 'components/Box';
import Button from 'components/Button';
import Project from 'components/Project';
import SEO from 'components/SEO';

import LinkedInIcon from 'public/icons/linkedin.svg';
import GithubIcon from 'public/icons/github.svg';
import EmailIcon from 'public/icons/email.svg';
import CvIcon from 'public/icons/cv.svg';
import ArrowDowmIcon from 'public/icons/arrow-down.svg';

import { PROJECTS } from 'constants/Projects.constant';

import styles from 'styles/pages/homepage.module.css';

const Home: NextPage = () => {
  return (
    <>
      <SEO />

      <section className={styles.hero}>
        <Box />
        <h2>Front-end engineer</h2>
        <div className={styles.links}>
          <Link href="https://www.linkedin.com/in/neda-danilevice-19ba4114a" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/nedakinduryte" target="_blank">
            <GithubIcon />
          </Link>
          <Link href="mailto:neda.danilevice@gmail.com">
            <EmailIcon />
          </Link>
          <Link href="/Neda-Danilevice-cv.pdf" target="_blank" rel="noopener noreferrer">
            <CvIcon />
          </Link>
        </div>

        <Button>
          <ArrowDowmIcon />
        </Button>
      </section>
      <section className={styles.projects}>
        <h3>Projects</h3>

        {PROJECTS.map((project) => (
          <Project {...project} key={project.name} />
        ))}
      </section>
    </>
  );
};

export default Home;
