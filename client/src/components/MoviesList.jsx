import MovieCard from "./MovieCard";

const MoviesList = ({ title, data }) => {

    console.log(data);

  return (
    <div className="px-10 ">
      <h1 className="text-lg -mt-10 z-30 relative md:text-3xl font-semibold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll mb-10 no-scrollbar">
        <div className="flex">
          {data?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MoviesList;