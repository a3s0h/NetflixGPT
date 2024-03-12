import { useSelector } from 'react-redux';
import useGetMoviesTrailer from '../hooks/useGetMoviesTrailer';

const VideoPlay = ({ moviesId }) => {
  
  const movieTrailer = useSelector((store) => store.movies?.trailers);
  // console.log(movieTrailer);

  useGetMoviesTrailer(moviesId);
  
  return (
    <div className="w-screen">
      <iframe 
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/e1k1PC0TtmE?si=${movieTrailer?.key}&autoplay=1&mute=1`}  
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlay;
