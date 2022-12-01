import React from'react';
import styles from './SocialLinks.module.css';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';
const SocialLinks =()=>{
    return(
        <div className={styles.sociallinks}>
        <a href="Facebook.com" className={styles.icon}><FacebookIcon/></a>
        <a  href="Instagram.com"className={styles.icon}><InstagramIcon/></a>
        <a href="Youtube.com"className={styles.icon}><YoutubeIcon/></a>
        <a  href="Twitter.com"className={styles.icon}><TwitterIcon/></a>
        </div>
    )
}



export default SocialLinks;