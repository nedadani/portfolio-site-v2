import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import Box from 'components/Box';
import ArrowButton from 'components/ArrowButton';
import Project from 'components/Project';
import SEO from 'components/SEO';

import { PROJECTS } from 'constants/Projects.constant';
import { CONTACT } from 'constants/Contact.constant';

import styles from 'styles/pages/homepage.module.css';

const Home: NextPage = () => {
  return (
    <>
      <SEO />

      <section className={styles.hero}>
        <Box />
        <h2>Software Engineer</h2>

        <div className={styles.links}>
          {CONTACT.map((contact) => {
            const Icon = contact.icon;
            return (
              <Link href={contact.href} target="_blank" key={contact.href}>
                <Icon />
              </Link>
            );
          })}
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
