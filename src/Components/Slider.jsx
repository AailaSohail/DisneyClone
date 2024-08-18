import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
function Slider() {
    const [movieList,setMovieList] =useState ([]);
    useEffect (()=>{
       getTrendingMovies();
    },[])
    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(response =>{
            console.log(response.data.results);
            setMovieList(response.data.results);
        })
    }
  return (
    <div>
        <HiChevronLeft  className='text-white text-3xl'/>
        <HiChevronRight className='text-white text-3xl'/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide '>
        {
            movieList.map((items,index) => (
                <img src={`${imgBaseUrl}${items.backdrop_path}`} className='min-w-full h-80 object-cover object-left-top m-5 rounded-sm hover:border-2 drop-shadow-[0_25px_10px_rgba(0,0,0,0.25)]' />
            ))
        }
    </div>
    </div>
  )
}

export default Slider