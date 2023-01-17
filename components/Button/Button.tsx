import React, { FC, ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
  <button {...rest} className={styles.button}>
    {children}
  </button>
);

export default Button;
