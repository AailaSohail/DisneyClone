import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
function MovieList({genreId,indexGenre}) {
    const elementRef= useRef();
    const [movies,setMovies] =useState([]);
    const screenWidth =window.innerWidth;
    useEffect(() =>{
        getMovie();
    },[])
    const getMovie = () => {
     GlobalApi.getGenreMovie(genreId).then(resp=>{
        console.log(resp.data.results)
        setMovies(resp.data.results);
     })
    }
    const sliderRight = (element ) => {
        element.scrollLeft += screenWidth -110 ;
    }
    
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth -110 ;
    }
  return (
    <div className='relative'>
        <HiChevronLeft  className={`hidden md:block text-white text-3xl absolute mx-8 ${indexGenre%4==0? 'mt-40':'mt-[75px]'}  left-0 cursor-pointer z-10`} onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className={`hidden md:block text-white text-3xl absolute mx-8 ${indexGenre%4==0? 'mt-40':'mt-[75px]'} right-0 cursor-pointer z-10`} onClick={()=>sliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto space-x-5 scrollbar-hide scroll-smooth py-5 px-3  ' ref={elementRef}>
        {
            movies.map((items,index) => (
                <>
                  {indexGenre%4==0? <img className='w-28 md:w-52 hover:scale-110 hover:border-2 rounded-lg shadow-[0px_26px_10px_-15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-150 cursor-pointer' src={imgBaseUrl+items.poster_path} alt="" />: <div className=' hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer'><img className='w-28 md:w-64 hover:border-2 rounded-lg shadow-[0px_26px_10px_-15px_rgba(0,0,0,0.5)] ' src={imgBaseUrl+items.backdrop_path} alt="" /><h2 className='w-28 md:w-64 ml-1 mt-3'>{items.title}</h2></div>
                 }
                </>
            ))
        }
    </div>
    </div>
  )
}

export default MovieList