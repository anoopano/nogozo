import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ShopProfile from './components/ShopProfile';
import CheckOut from './components/CheckOut';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { useState } from 'react';

function App() {

  const [itemCategory, setItemCategory] = useState("");

  function categorySetFn(item) {
    setItemCategory(item)
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <HomePage categorySetFn={categorySetFn} />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route exact
            path="/category/:category_name"
            render={(props) => (
              <div>
                <Header />
                <ShopProfile {...props} itemCategory={itemCategory} />
              </div>
            )}
          />

        </Switch>
      </div>
    </Router >
  );
}

export default App;
