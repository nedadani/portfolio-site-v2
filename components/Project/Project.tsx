import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './Project.module.css';

interface ProjectTypes {
  name: string;
  mobileImages: StaticImageData[];
  desktopImages: StaticImageData[];
  summary: string;
  description: string;
  link: string;
  github: string;
}

const Project: FC<ProjectTypes> = ({
  name,
  mobileImages,
  desktopImages,
  summary,
  description,
  link,
  github,
}) => {
  return (
    <article className={styles.wrapper}>
      <h4>{name}</h4>

      <div className={styles.images}>
        <div data-is-mobile>
          {mobileImages.map((image) => (
            <Image
              src={image.src}
              alt={`Mobile screenshot of the ${name}`}
              width={375}
              height={667}
              key={image.src}
            />
          ))}
        </div>

        <div data-is-desktop>
          {desktopImages.map((image) => (
            <Image
              src={image.src}
              alt={`Desktop screenshot of the ${name}`}
              width={800}
              height={800}
              key={image.src}
            />
          ))}
        </div>
      </div>

      <p>{summary}</p>
      <p>{description}</p>

      <div className={styles.links}>
        <Link href={link} target="_blank">
          <span>See the website</span>
        </Link>
        <Link href={github} target="_blank" data-hidden={!github}>
          <span>See GitHub</span>
        </Link>
      </div>
    </article>
  );
};

export default Project;
