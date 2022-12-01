import React from 'react';
import styles from'./SecondaryNavigation.module.css';
import Search from'../Search/Search';
import Notifications from '../Notifications/Notifications';
import UserMenu from '../UserMenu/UserMenu';
import BillboardSettings from '../BillboardSettings/BillboardSettings';

const SecondaryNavigation = () => {
    return(
        <div className={styles.box}>
            <div className={styles.navitem}><Search/></div>
            <div className={styles.navitem}><Notifications/></div>
            <div className={styles.navitem}><UserMenu/></div>
            <div className={styles.navitem}><BillboardSettings/></div>      
        </div>
    )
};

export default SecondaryNavigation;