import React from 'react'
import GenreList from '../APIGet/GenreList'

function MovieGenreList() {
  return (
    <div>
      {GenreList.genre.map((items,index) => index <=4&& (
        <div className='p-8 px-8 md:px-16'> 
          <h2 className='text-xl text-white font-bold'>{items.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default MovieGenreList