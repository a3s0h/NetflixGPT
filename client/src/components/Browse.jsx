import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MoviesTrailer from './MoviesTrailer';
import MoviesListSection from './MoviesListSection';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Footer from './Footer';


const Browse = () => {

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black">
        <Header />
        <MoviesTrailer/>
        <MoviesListSection/>
        {/* <Footer/> */}
    </div>
  )
}

export default Browse