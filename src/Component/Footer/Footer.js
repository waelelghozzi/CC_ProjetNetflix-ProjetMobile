import React from 'react';
import styles from './Footer.module.css';
import SocialLinks from '../SocialLinks/SocialLinks';
import FooterLinks from '../FooterLinks/FooterLinks';
const Footer = () =>{
    return(
        <footer>
        <div className={styles.sociallinks}>  <SocialLinks/></div>
       

        <FooterLinks/>
        </footer>
    )
}


export default Footer;