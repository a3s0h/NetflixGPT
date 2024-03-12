import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies?.popular
  );

  const getPopularMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);
      const json = await data.json();
    //   console.log("hello");
    //   console.log(data);
      dispatch(addPopularMovies(json?.results));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error as needed (e.g., set an error state or show a message)
    }
  };

//   console.log(nowPlayingMovies);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
