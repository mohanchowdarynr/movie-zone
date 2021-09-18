import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { DetailePageProvider } from "./Context/DetailPageContext";
// import { AuthProvider } from "./Context/AuthContext";
 import { ListProvider } from "./context/ListContext";

ReactDOM.render(
  <React.StrictMode>
   <ListProvider>
    <App />
   </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


