import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './requests';

function Banner() {

    const [movie, setmovie]= useState([]);

    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(requests.fetchTrending);
        setmovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length-1)
          ]
        )
        return request;
      }
      fetchData();
    },[])

    console.log(movie)

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    

  return (
    <header className="banner" 
    style={{
      backgroundSize: "cover",
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center top center bottom",
        objectFit:"contain"  
       
  } }>

    <div className="banner__contents">
    
    <div className="banner__title">{movie?.title || movie?.name || movie?.original_name }</div>
    <div className="banner__buttons">   
    <button className="banner__button">Play</button>    
    <button className="banner__button"> My List +</button>  
     </div>
     <div className="banner__description"> 
     {
        truncate(movie?.overview, 200 )
     }
     </div>

    </div>
    <div className="banner__fadebutton"></div>
    </header>
  )
}

export default Banner;
