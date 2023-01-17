import React, { FC } from 'react';

import styles from './Box.module.css';

const Box: FC = () => (
  <div className={styles.box}>
    <h1 className={styles.heading}>
      <span className={styles.name}>Ne</span>
      <span className={styles.name}>da</span>
    </h1>
  </div>
);

export default Box;
