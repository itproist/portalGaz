import React from 'react';
import { useSelector } from 'react-redux';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ avatarUrl, firstName, surname, lastName, additionalText }) => {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={avatarUrl || '/noavatar.png'} />
      <div className={styles.userDetails}>
        <div className={styles.userName}>
          {lastName}
          <span className={styles.firstName}>{firstName}</span>
          {surname}
        </div>

        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
