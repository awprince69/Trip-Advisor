import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import RideSearch from './Component/RideSearch/RideSearch';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/search/:rideName">
          <RideSearch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
