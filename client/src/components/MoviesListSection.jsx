import React from 'react'
import MoviesList from './MoviesList'
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux'

const MoviesListSection = () => {

  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlaying);
  const topRatedMovies = useSelector((store) => store?.movies?.topRated);
  const popularMovies = useSelector((store) => store.movies?.popular)
  const upcomingMovies = useSelector((store) => store.movies?.upcoming)


// console.log("here data : ", moviesPlaying?.nowPlaying);
  return  (
    <div className="bg-black h-auto  mt-10">
      <MoviesList title={"Now Playing"} data={nowPlayingMovies}/>
      <MoviesList title={"Top Rated"} data = {topRatedMovies} />
      <MoviesList title={"Popular"} data = {popularMovies} />
      <MoviesList title={"Upcoming"} data = {upcomingMovies} />
    </div>
  )
}

export default MoviesListSection