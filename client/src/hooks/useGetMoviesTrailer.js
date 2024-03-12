import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";


const useGetMoviesTrailer = (moviesId) => {
    const dispatch = useDispatch();
    
    const getMoviesTrailer =async ()=> {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`, options)
        const response = await data.json();
      //  console.log("response" , response);
        const trailer = response?.results.filter((movie) => movie.type === "Trailer");
      dispatch(addMovieTrailer(trailer[0]));
  }

  useEffect(()=>{
    getMoviesTrailer();
  },[])
}


export default useGetMoviesTrailer;