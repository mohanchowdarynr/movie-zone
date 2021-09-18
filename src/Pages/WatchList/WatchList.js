import React from 'react'
import DetailCard from '../../Components/DetailCard/DetailCard';
import { useListProvider } from '../../context/ListContext'
import './watchlist.css';

const WatchList = () => {
    const {list,dispatch}=useListProvider();
    console.log(list);
    return (
        <div className="watchlater">
        <h1>Watch later</h1>
         {
            list.map((item) => <DetailCard item={item} dispatch={dispatch} id={item.id}/>)
         }
         
        </div>
    )
}

export default WatchList
