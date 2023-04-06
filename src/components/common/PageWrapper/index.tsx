import React from 'react';
import styles from './PageWrapper.module.scss';
import Footer from '../Footer';
import Header from '../Header';
import Sider from '../Sider';
import Content from '../Content';

type PageWrapperPropsType = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperPropsType) => {
  return (
    <div className={styles.page}>
      <Header />
      <Sider />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default PageWrapper;
