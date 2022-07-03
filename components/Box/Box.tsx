import React, { FC } from 'react';

import styles from './Box.module.css';

const Box: FC = () => (
	<div className={styles.square}>
		<span className={styles.name}>Ne</span>
		<span className={styles.name}>da</span>
	</div>
);

export default Box;
