import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlaying
  );

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options);
      const json = await data.json();
      // console.log("hello");
      // console.log(data);
      dispatch(addNowPlayingMovies(json?.results));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error as needed (e.g., set an error state or show a message)
    }
  };

  console.log(nowPlayingMovies);

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
