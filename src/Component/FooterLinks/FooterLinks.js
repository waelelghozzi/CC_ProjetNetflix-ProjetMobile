import React from 'react';
import styles from './FooterLinks.module.css';
const FooterLinks =() =>{
    const items=['Audios ans Subtitles','Audio Description','Help Center','Gift Card','Media Center','Investor Relations',
'Jobs','Terms Of Use','Privacy','Legal Notices','Cookie preference','impresseum','Contact Us'];



    return(
<ul className={styles.itemsList}>
    {items.map(item =>(
        <li className={styles.item} key={item}><a href="/">{item}</a></li>
    ))}
</ul>
)
}
export default FooterLinks;