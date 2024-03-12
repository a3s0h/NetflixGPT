import React from 'react'
import VideoPlay from './VideoPlay'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MoviesTrailer = () => {

    const movies = useSelector((store) => store.movies?.nowPlaying)
// console.log(movies?.nowPlaying);
if(movies === null)return;      // this is called early return if data is not being loaded yet to avoid any errors 

const movieFirstItem = movies[0];
// if (!movieFirstItem) return;

// console.log( "movies first : " , movieFirstItem);
const {title , overview , id} = movieFirstItem;

  return (
    <div className="relative overflow-x-hidden">
        <VideoPlay moviesId={id}/>
        <VideoTitle title = {title} overview = {overview} />
    </div>
  )
}

export default MoviesTrailer