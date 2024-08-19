import React from 'react'
import GenreList from '../APIGet/GenreList'
import MovieList from './MovieList'

function MovieGenreList() {
  return (
    <div>
      {GenreList.genre.map((items,index) => index <=4&& (
        <div className={`${index%4==0? 'p-5':'h-48 md:h-auto'} px-8 md:px-16`}> 
          <h2 className='text-xl text-white font-bold'>{items.name}</h2>
          <MovieList genreId={items.id} indexGenre={index}/>
        </div>
      ))}
    </div>
  )
}

export default MovieGenreList