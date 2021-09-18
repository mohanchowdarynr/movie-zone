import React, { useState } from "react";
import Categories from "../../Components/Categories/Categories";
import MovieList from "../../Components/MovieList/MovieList";
import requests from "../../Components/Requests/requests";

const Homepage = () => {
  const [selectedOption, setSelectedOption] = useState(requests.fetchAction);
  return (
    <div className="home">
      <Categories setSelectedOption={setSelectedOption} />
      <div className="homeMovies">
        <MovieList selectedOption={selectedOption} />
      </div>
    </div>
  );
};

export default Homepage;
