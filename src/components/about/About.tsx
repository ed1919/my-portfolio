import { useState, useEffect } from 'react';
import styles from './About.module.scss';

interface IAboutProps {}

const About: React.FC<IAboutProps> = ({}) => {
  return <div className={styles.container}>About</div>;
};

export default About;
