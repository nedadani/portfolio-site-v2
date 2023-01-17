import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';

import ArrowDowmIcon from 'public/icons/arrow-down.svg';

import styles from './ArrowButton.module.css';

const ArrowButton: FC<LinkProps> = (props) => (
  <Link {...props} className={styles.arrowButton}>
    <ArrowDowmIcon />
  </Link>
);

export default ArrowButton;
