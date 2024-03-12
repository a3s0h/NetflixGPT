import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector(
    (store) => store.movies?.topRated
  );

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
      const json = await data.json();
    //   console.log("hello");
    //   console.log(data);
      dispatch(addTopRatedMovies(json?.results));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error as needed (e.g., set an error state or show a message)
    }
  };

//   console.log(nowPlayingMovies);

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
