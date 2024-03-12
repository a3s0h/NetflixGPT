import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constants";
import { addUpcoming } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = () =>{
    const dispatch = useDispatch();

    const upcomingMovies = useSelector((store) => store.movies?.upcoming);

    const getUpcomingMovies = async () =>
    {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" , options);
        const json = await data.json(); 
        dispatch(addUpcoming(json?.results));
    }

    useEffect(()=>{
        !upcomingMovies && getUpcomingMovies();
    },[])


}


export default useUpcomingMovies;