import React from 'react';
import { useState,useEffect } from 'react';
import instance from '../instance';
import './Banner.css';

function Banner({fetchUrl}) {

    const [movies,setMovies]=useState([])
    async function fetchData(){
        const request=await instance.get(fetchUrl)
        setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
    }
    useEffect(()=>{
        fetchData()
    },[])
     //console.log(movies)

    // Truncate function
    function Truncate(str,n){
      return str?.length>n?str.substr(0,n-1)+'...':str
    }

  return (
    <header className='bannerHead' 
            style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")` }}>

        <div className='banner_content'>
          <h1 className='banner_title'>{movies.name}</h1>
          <h2 className='banner_desc'>{Truncate(movies?.overview,125)}</h2>
        </div>
        <div>

        </div>
    </header>
  )
}

export default Banner