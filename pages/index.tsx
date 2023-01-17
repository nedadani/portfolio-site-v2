import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import Box from 'components/Box';
import ArrowButton from 'components/ArrowButton';
import Project from 'components/Project';
import SEO from 'components/SEO';

import LinkedInIcon from 'public/icons/linkedin.svg';
import GithubIcon from 'public/icons/github.svg';
import EmailIcon from 'public/icons/email.svg';
import CvIcon from 'public/icons/cv.svg';

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

        <ArrowButton href="#projects" />
      </section>

      <section className={styles.projects} id="projects">
        <h3>Projects</h3>

        {PROJECTS.map((project) => (
          <Project {...project} key={project.name} />
        ))}
      </section>
    </>
  );
};

export default Home;
