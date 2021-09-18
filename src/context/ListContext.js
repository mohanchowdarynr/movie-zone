import React, { createContext, useContext, useReducer} from "react";
import reducer from './listReducer';
const ListContext = createContext();

const initialState = {
    list : [],
    favorites : []
} 
export function ListProvider ({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
return(
    <ListContext.Provider value={{list:state.list,favorites:state.favorites,dispatch}}>
        {children}
    </ListContext.Provider>
)
}
export function useListProvider(){
    return useContext(ListContext);
}