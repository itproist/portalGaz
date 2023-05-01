import React from 'react';
import Header from '../Header';
import styles from './PageWrapper.module.scss';
import { Outlet } from 'react-router-dom';
import Sider from '../Sider';

const PageWrapper = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default PageWrapper;
