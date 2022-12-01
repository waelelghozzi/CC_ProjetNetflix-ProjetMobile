import React from 'react'
import styles from './Card.module.css'

function Card(props){
    //console.log(props.stylek)
    return(
        <div className={styles.card}
        style={{ backgroundImage:`url(https://www.themoviedb.org/t/p/w220_and_h330_face${props.stylek})`}}>
       
        </div>
    )
}
export default Card;