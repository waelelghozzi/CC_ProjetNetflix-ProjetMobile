import styles from './Row.module.css';
import Carousel from 'react-elastic-carousel';
import Card from '../card/Card';
import axios from '../../Billboard/axios';
import React,{useEffect,useState} from 'react';


function Row (props) {
const breakPoints=[{width:1, itemsToShow:1},{width:500, itemsToShow:2},{width:768, itemsToShow:8},{width:1920, itemsToShow:8},]

let k= props.id

const totmovies=[]
const[movie,setMovie]=useState([]);

useEffect(()=>{
let i=0
axios.get('https://api.themoviedb.org/3/movie/popular?api_key=12e9cf2407f2dadf1b13654b9863766d&language=en-US&page=200').then((response)=>{
response.data.results.forEach(element => {
    totmovies[i]=element;i++});})

axios.get('https://api.themoviedb.org/3/movie/popular?api_key=12e9cf2407f2dadf1b13654b9863766d&language=en-US&page=300').then((response2)=>{
response2.data.results.forEach(element => {
    totmovies[i]=element;
    i++});setMovie(totmovies)})},[]);


 //movie = movie.filter(ele => {ele.genre_ids[0]==k})


let gg=""    
const ro=movie.map((data,id)=>{
    
    gg=`${movie[id].backdrop_path}`
        
     return(
            <div className={styles.col}>
            <Card key={id}  stylek={gg}/>
            <div className={styles.tit}>
            {data.title}      
            </div>
            </div>)})

return(
<div className={styles.row}>
<p>{props.genre}</p>  
<Carousel breakPoints={breakPoints}>
   {ro}  
</Carousel>
</div>)
}

export default Row;