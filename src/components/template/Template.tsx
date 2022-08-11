import { useState, useEffect } from 'react';
import styles from './Template.module.scss';

interface ITemplateProps {}

const Template: React.FC<ITemplateProps> = ({}) => {
  return <div className={styles.container}>Template</div>;
};

export default Template;
