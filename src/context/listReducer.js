import {addToFavorites,addToList,removeFavorites,removeList} from './actions';

const listReducer = (state,{type,payload}) => {
    switch (type) {
        case addToFavorites: {
          return {
            ...state,
            favorites: [...state.favorites, payload] 
          };
        }
        case addToList: {
            return {
              ...state,
              list: [...state.list, payload]
            };
          }
          case removeFavorites:{
              const data = state.favorites.filter((item) => item.id !== payload.id)
              return {
                  ...state,
                  favorites:data
              }
          }
          case removeList:{
            const listdata = state.list.filter((item) => item.id !== payload.id)
            return {
                ...state,
                list:listdata
            }
          }
          default:
              return state
    }
}
export default listReducer;