import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DetailPage from './Pages/DetailPage/DetailPage';
import WatchList from './Pages/WatchList/WatchList';
import Favorites from './Pages/Favorites/Favorites';
import SearchPage from './Pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
           <Homepage />
        </Route>
        <Route path="/details/:movieId">
           <DetailPage />
        </Route>
        <Route path="/WatchList">
           <WatchList />
        </Route>
        <Route path="/Favorites">
           <Favorites />
        </Route>
        <Route path="/Search">
           <SearchPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
