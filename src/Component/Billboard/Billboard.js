import React,{useEffect,useState} from 'react';
import Titles from '../Titles/Titles';
import styles from './Billboard.module.css';
import axios from 'axios';


function Billboard () {
    
     const totmovies=[]
  
     
        const[movie,setMovie]=useState([]);
   

useEffect(()=>{
   let i=0
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=12e9cf2407f2dadf1b13654b9863766d&language=en-US&page=200').then((response)=>{
        
        response.data.results.forEach(element => {
            totmovies[i]=element;
            i++
        });
    })
    
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=12e9cf2407f2dadf1b13654b9863766d&language=en-US&page=300').then((response2)=>{
       
        response2.data.results.forEach(element => {
            totmovies[i]=element;
            i++
        });
        //console.log(totmovies)
        setMovie(totmovies[Math.floor(Math.random()*totmovies.length-1)])
    })
   

},[]);


    
  


   

//     const[movie,setMovie]=useState([]);
//      useEffect(()=>{
//      const options = {
//      method: 'GET',
//      url: 'https://unogsng.p.rapidapi.com/genres',
  
//    headers: {
//      'X-RapidAPI-Key': '8ed05dc578mshe74ac382f96a078p12fcd2jsnbe54c6d80d1a',
//      'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
//      }
    
//    }; setMovie(options)
//     },[])
  
//    axios.request(movie).then( (response) =>{
//        console.log(response.data +"new api");

//      }).catch(function (error) {
//        console.error("error");
//    });

  
    return(                       
 
    <header className={styles.billboard} 
    style={{ backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,  
    backgroundSize: "cover", }}>

   
        <div className={styles.billboard_content}>
            
            <h1 className={styles.billboadTitle}>
              {movie.title}
            </h1>

            <div className={styles.billboardButtons}>
                <button className={styles.billboardBotton}>Play</button>
                <button className={styles.billboardBotton}>MyList</button>
            </div>   

            <h1 className={styles.billboardDescription }> 
            {movie.overview}
            </h1>
        </div>
        <div className={styles.fadeBottom}/>
        </header>

    )}

export default Billboard;






// {
    //     async function fetchData(){
    //         const request=await axios.get(requests.fetchNetflixOriginals);
    //         setMovie(
    //             request.data.results[
    //                 Math.floor(Math.random()*request.data.results.length-1)
    //             ]
    //         );
    //         return request;
    //     }
    //     fetchData();
    // }