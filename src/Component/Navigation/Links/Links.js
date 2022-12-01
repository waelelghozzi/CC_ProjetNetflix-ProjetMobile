import React from 'react';
import {Link,Outlet} from "react-router-dom";
import styles from "../Navigation.module.css";
const Links =()=>{
    return(
        <>
        
        <ul className={styles.navigationList}>
            <li className={styles.navigationItem}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.navigationItem}>
                <Link to="/">TV Shows</Link>
            </li>
            <li className={styles.navigationItem}>
                <Link to="/">Movies</Link>
            </li>
            <li className={styles.navigationItem}>
                <Link to="/">Popular & New</Link>
            </li>
            <li className={styles.navigationItem}>
                <Link to="/">MyList</Link>
            </li>
        </ul>

        <Outlet/>
        </>
    )
}
export default Links;