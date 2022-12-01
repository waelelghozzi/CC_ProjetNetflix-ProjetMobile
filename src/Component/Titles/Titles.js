

import React, { useEffect , useState } from 'react';
import styles from './Titles.module.css';
import Row from './Rows/Row.js';
//import axios from 'axios';
import axios from 'axios';
import { generatePath } from 'react-router-dom';



const Titles = () => {

var [genre,setGenres]=useState([]);
useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=12e9cf2407f2dadf1b13654b9863766d&language=en-US')
    .then((response)=>{setGenres(response);})},[]);


    
      //  console.log(genre.data)
     
console.log(genre)
   
//  const ro =()=>{
//     genre.data.forEach((data,id)=>{
//     return(<Row key={id} genre={data}/>)});}  

// const ro=movie.map((data,id)=>{
//  return()})

console.log()
return(<div className={styles.titles}>
<Row key={0} genre={"Action"} id={28}/> 
<Row key={1} genre={"Crime"}  id={80}/>
<Row key={0} genre={"Comedy"}  id={35}/> 
<Row key={1} genre={"History"}  id={36}/>
<Row key={0} genre={"Fantasy"}  id={14}/> 
<Row key={1} genre={"Family"}  id={10751}/>
</div>)}

export default Titles;