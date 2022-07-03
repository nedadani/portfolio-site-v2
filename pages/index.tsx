import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Box from 'components/Box';

import styles from 'styles/pages/homepage.module.css';

const Home: NextPage = () => {
	return (
		<>
			<section className={styles.hero}>
				<Box />
			</section>
		</>
	);
};

export default Home;
