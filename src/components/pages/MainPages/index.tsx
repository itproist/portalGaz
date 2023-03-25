import React from "react";
import { Outlet } from "react-router-dom";
import styles from './MainPages.module.scss';

const PageWrapper = () => {
    return (
        <div className={styles.page}>
            <header>111</header>
            <main className={styles.page_main}>
                <Outlet />
            </main>
            <footer>333</footer>
        </div>
    )
}

export default PageWrapper;