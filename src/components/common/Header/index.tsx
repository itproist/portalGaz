import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/gaz.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import List from '../Popup';
import Popup from '../Popup';
import { selectIsAuth } from 'store/slice/users';
import { Button } from '@mui/material';
// import logo from '../../../assets/gaz.png';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <header className={styles.header}>
      {isAuth ? (
        <>
          <Link to="/">
            <img className={styles.igegege} src={logo} alt="" />
          </Link>
          <div className={styles.button}>
            <Link to="/add-post">
              <Button variant="contained">Написать статью</Button>
            </Link>
          </div>
          <div className={styles.popup_heh}>
            <Popup />
          </div>
        </>
      ) : (
        <>
          <Navigate to="/login" />
        </>
      )}
    </header>
  );
};

export default Header;
