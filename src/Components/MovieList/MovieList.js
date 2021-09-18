import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import movie from "../Axios/axios";
import { Loader } from "../../Components/Loader/Loader";

function MovieList({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
   
  useEffect(() => {
    async function fetchData() {
      setLoader(true);
      const response = await movie.get(selectedOption);
      setMovies(response.data.results);
      setLoader(false);
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className="movieList">
      { loader ? (
        <Loader/>
      ):
      (
        movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
}

export default MovieList;