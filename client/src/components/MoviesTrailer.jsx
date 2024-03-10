import React from 'react'
import VideoPlay from './VideoPlay'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MoviesTrailer = () => {

    const movies = useSelector(store => store?.movies)
console.log(movies?.nowPlaying);
if(movies === null)return;      // this is called early return if data is not being loaded yet to avoid any errors 

const movieFirstItem = movies?.nowPlaying[0];
if (!movieFirstItem) return;
console.log(movieFirstItem);
const {title , overview} = movieFirstItem;

  return (
    <div className="pt-64 px-20 w-1/2">
        <VideoPlay/>
        <VideoTitle title = {title} overview = {overview} />
    </div>
  )
}

export default MoviesTrailer