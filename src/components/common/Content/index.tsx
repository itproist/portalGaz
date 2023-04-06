import React, { ReactNode } from "react";
import styles from './Content.module.scss';

type ContentPropsType = {
    children: ReactNode;
}

const Content = ({children} : ContentPropsType) => {
    return (
       <main className={styles.content}>{children}</main>
    )
}

export default Content;