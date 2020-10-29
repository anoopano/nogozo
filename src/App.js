import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ShopProfile from './components/ShopProfile';
import CheckOut from './components/CheckOut';
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
              <Header />
              <HomePage />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route exact path="/category/:category_name">
            <Header />
            <ShopProfile />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
