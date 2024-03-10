import React, { useEffect } from 'react'
import Header from './Header'
import useMoviesList from '../hooks/useMoviesList'
import MoviesTrailer from './MoviesTrailer';
import MoviesPack from './MoviesPack';


const Browse = () => {

   useMoviesList();
  
  return (
    <div>
        <Header />
        <MoviesTrailer/>
        <MoviesPack/>
    </div>
  )
}

export default Browse