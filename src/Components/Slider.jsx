import React, { useRef, useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
function Slider() {
    const elementRef= useRef();
    const [movieList,setMovieList] =useState ([]);
    const screenWidth =window.innerWidth;
    useEffect (()=>{
       getTrendingMovies();
       // Set up the automatic sliding interval
    const autoSlide = setInterval(() => {
        sliderRight(elementRef.current);
      }, 3000);
  
      // Cleanup interval on unmount
      return () => clearInterval(autoSlide);
    },[])
    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(response =>{
            console.log(response.data.results);
            setMovieList(response.data.results);
        })
    }
    const sliderRight = (element ) => {
        element.scrollLeft += screenWidth -110 ;
    }
    
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth -110 ;
    }
  return (
    <div>
        <HiChevronLeft  className='hidden md:block text-white text-3xl absolute mx-8 mt-40 cursor-pointer z-10' onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-3xl absolute mx-8 mt-40 right-0 cursor-pointer z-10' onClick={()=>sliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {
            movieList.map((items,index) => (
                <img src={`${imgBaseUrl}${items.backdrop_path}`} className='min-w-full md:h-80 object-cover md:object-left-top mr-5 rounded-md hover:border-4 transition-all duration-150 ease-in-out shadow-[0px_26px_10px_-15px_rgba(0,0,0,0.5)]' />
            ))
        }
    </div>
    </div>
  )
}

export default Slider