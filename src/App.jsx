import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useStates } from './utilities/states';
import { factory } from './utilities/FetchHelper';
import { init } from './utilities/shoppingCartLogic';
import './utilities/scrollBehavior';

import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ProductEdit from './ProductEdit';
import ShoppingCart from './ShoppingCart'
import Home from './Home';

// Create classes used for fetching from the REST-api
const { hästar, kategorier: hästraser } = factory;

export default function App() {

  let s = useStates('main', {
    hästar: [],
    kategorier: [],
    kateogriid: 0,
    cartContents: []
  });

  useEffect(() => {
    (async () => {
      // get the categories from the db
      s.kategorier = await hästraser.find();
      // get the products from the db
      s.hästar = await hästar.find();
      // initilize the shopping cart
      // (this provides local storage of cartContents)
      init(s, 'cartContents');
    })();
  }, []);

  return s.hästar.length ? <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/product-edit/:id" element={<ProductEdit />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
    </Routes>
  </Router> : null;
}