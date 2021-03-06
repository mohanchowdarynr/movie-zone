import React from "react";
import "./moviecard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const {title,original_name} = movie;
  const image_api = "https://image.tmdb.org/t/p/original/";
  return (
    <Link to={`/details/${movie.id}`} className="link">
      <div className="moviecard">
        {movie.backdrop_path || movie.poster__path ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            src={`${image_api}${movie.backdrop_path || movie.poster__path}`}
            alt="movie poster"
          ></motion.img>
        ) : (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            src="https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="movie poster"
          ></motion.img>
        )}
        
        <h3>{title.substring(0,30) || original_name.substring(0,30)}</h3>
        
        <TextTruncate
          line={1}
          element="p"
          truncateText="..."
          text={movie.overview}
        />

        <div className="moviecardAbout">
          <div>{movie.release_date || movie.first_air_date}</div>
          <div className="moviecardLikes">
            <ThumbUpAltIcon />
            {movie.vote_count}
          </div>
        </div>
      </div>
      </Link>
  );
}

export default MovieCard;