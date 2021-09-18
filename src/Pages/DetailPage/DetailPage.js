import React, { useEffect, useState } from "react";
import "./detailpage.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Tooltip from "@material-ui/core/Tooltip";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useListProvider } from "../../context/ListContext";
// import ReactPlayer from "react-player";
import axios from "axios";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Loader } from "../../Components/Loader/Loader";

function DetailPage() {
  const { movieId } = useParams();
  const [loader, setLoader] = useState(true);
  const [data,setData] = useState([]);
  const {dispatch} = useListProvider();
  const movie_api = "https://api.themoviedb.org/3/movie/";
  const image_api = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchdata() {
      setLoader(true);
      const response = await axios.get(
        `${movie_api}${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      );
      setData(response.data);
      setLoader(false);
    }
    fetchdata();
  }, [movieId]);
   console.log(data);

  return (
    <div>
      {loader ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="detailPage">
          {data.backdrop_path || data.poster__path ? (
            <img
              className="detailPage__background"
              src={`${image_api}${data.backdrop_path || data.poster_path}`}
              alt="movie poster"
            ></img>
          ) : (
            <img
              className="detailPage__background"
              src="https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="movie poster"
            ></img>
          )}

          <div className="detailPage__content">
            <div className="detailPage__body">
              <div className="detailPage__img">
                {data.backdrop_path || data.poster__path ? (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    src={`${image_api}${
                      data.poster_path || data.backdrop_path
                    }`}
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
              </div>
              <div className="detailPage__detail">
                <h1>{data.title || data.original_name}</h1>
                <div className="detailPage__facts">
                  {data?.release_date} •{" "}
                  {data?.genres?.map((gen) => `${gen.name} | `)} •{" "}
                  {/* {data.runtime && timeCalculator(data.runtime)} */}
                </div>
                <div className="detailPage__likes">
                  <ThumbUpAltIcon style={{ marginRight: "10px" }} />
                  {data?.vote_count}
                </div>
                <div className="detailPage__icons">
                  <Tooltip title="Mark as favorite">
                    <IconButton onClick={() => {dispatch({type:'ADD_TO_FAVORITES',payload:data})}}>
                      <FavoriteIcon
                        style={{ color: "white" }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Watch Later">
                    <IconButton onClick={() => {dispatch({type:'ADD_TO_LIST',payload:data})}}>
                      <WatchLaterIcon
                        style={{ color: "white" }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Play Trailer">
                    <IconButton >
                      <PlayArrowIcon />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className="detailPage__tagline">
                  <em>{data?.tagline}</em>
                </div>
                <div className="detailPage__about">
                  <h3>Overview</h3>
                  <p>{data.overview}</p>
                </div>
              </div>
            </div>
          </div>
          {/* {selected && (
            <div className="modal" onClick={handlePlayer}>
              <ReactPlayer
                className="react-player"
                url={`https://youtu.be/${
                  data?.videos?.results[0]?.key || data?.videos?.results[1]?.key
                }`}
                width="100%"
                height="100%"
                controls="true"
              />
            </div>
          )} */}
        </div>
      )}
    </div>
  );
}

export default DetailPage;
