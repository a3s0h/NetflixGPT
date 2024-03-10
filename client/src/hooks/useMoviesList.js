import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../utils/moviesSlice";
import { options } from '../utils/constants'

const useMoviesList = () =>{
    const dispatch = useDispatch();

  useEffect(()=>{
    const fetchData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        const response = await data.json();
        dispatch(getMovies(response?.results));
        console.log(response?.results);
    }

    fetchData();
  },[])

}

export default useMoviesList;