import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Calculator from './Calculator'
import FilterableProductsTable from './FilterableProductsTable'

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Convertisseur Celsius - Fahrenheit</Link>
            </li>
            <li>
              <Link to="/liste">Liste de produits</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
  
        <Switch>
      
          <Route path="/liste" >
            <FilterableProductsTable products={PRODUCTS} />
          </Route>
          <Route path="/" component={Calculator} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;