import React, {  useState } from "react";
import axios from "axios";
import MovieCard from "../../Components/MovieCard/MovieCard";
import "./searchpage.css";
import ClearIcon from "@material-ui/icons/Clear";
import { Loader } from "../../Components/Loader/Loader";

function SearchPage() {
  const [search,setSearch] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const search_api = "https://api.themoviedb.org/3/search/";


    async function fetchData() {
      setLoader(true);
      const response = await axios.get(
        `${search_api}movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
      );
      setSearchMovies(response.data.results);
      setLoader(false);
    }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="searchPage">
    <form onSubmit={(e) => handleSubmit(e)}>
          <div className="search">
            <input
              type="text"
              value={search}
              placeholder="Search.."
              required
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <ClearIcon
              onClick={() => {
                setSearch("");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </form>
      <div className="searchPage__header">
      {
          search ? (<h2>
          Search Results for <em>{search}</em>
        </h2>) : ('')
      }
      </div>
      {loader ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="search__list">
          {searchMovies.length > 0 ? (
            searchMovies.map((movie) => <MovieCard movie={movie} />)
          ) : (
            <div className="search__message">
              <h2>No movies for your search .. </h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
