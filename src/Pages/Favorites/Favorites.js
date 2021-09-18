import React from 'react'
import FavoriteCard from '../../Components/Favoritecard/FavoriteCard';
import { useListProvider } from '../../context/ListContext'
import './favorites.css';

const Favorites = () => {
    const {favorites,dispatch} =useListProvider();
    return (
        <div className="favorite">
          {
            favorites.map((item) => <FavoriteCard item={item} dispatch={dispatch} id={item.id}/>)
          }  
        </div>
    )
}

export default Favorites
