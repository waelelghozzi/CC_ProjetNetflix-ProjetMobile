import React from 'react';
import styles from './BillboardSettings.module.css';
import SettingsIcon from "./SettingsIcon";
const BillboardSettings = () => {
    return(
        <div className={styles.BS}>
           <div className={styles.user}>
            <SettingsIcon/>
           </div>
           
        </div>
    )
}


export default BillboardSettings;