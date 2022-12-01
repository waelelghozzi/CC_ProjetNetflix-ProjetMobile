import React from 'react';
import styles from './Navigation.module.css';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';
import logo from './assets/logonetflix.png';
import Links from './Links/Links';

const Navigation = () =>{
  {/*} const navItems=[
        'Home','TV Shows', 'Movies','New & Popular','MyList'
    ]*/}

    return(

        <div className={styles.navigation}>
           <div className={styles.mainNavigation}> 
            <img  className={styles.logo} src={logo} alt="logo"  />
           {/*} <ul className={styles.navigationList}>
           {navItems.map(item=> (
            <li className={styles.navigationItem} key={item}><a href="/">{item}</a></li>
           ))}
           </ul>*/}
           
            <Links/>
           
            </div>
            <SecondaryNavigation/>
        </div>
       
    )
}
export default Navigation;