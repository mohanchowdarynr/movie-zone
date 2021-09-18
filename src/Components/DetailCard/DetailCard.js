import React from 'react';
import './detailcard.css';
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";


const DetailCard = ({item,dispatch}) => {
    const image_api = "https://image.tmdb.org/t/p/original/";
    console.log("details");
    return (
        <div className="detailCard">
            <div className="image">
              <img src={`${image_api}${item.backdrop_path || item.poster__path}`} alt="movie_name"/>
            </div>
            <div className="content">
            <h1>{item.title}</h1>
            <IconButton
                  style={{
                    backgroundColor: "#1F2937",
                    color: "white",
                    marginRight: "10px",
                  }}
                  onClick={() => dispatch({type:"REMOVE_LIST",payload:item})}
                >
                  <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default DetailCard
