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
import ProductList2 from './ProductList2';
import ProductDetail from './ProductDetail';
import ProductDetail2 from './ProductDetail2';
import ProductEdit from './ProductEdit';
import ShoppingCart from './ShoppingCart'
import Home from './Home';
import Backoffice from './Backoffice';
import BackofficeCamera from './BackofficeCamera';

// Create classes used for fetching from the REST-api
const { Product, Categorie: Category } = factory;

export default function App() {

  let s = useStates('main', {
    products: [],
    categories: [],
    chosenCategoryId: 0,
    cartContents: []
  });

  useEffect(() => {
    (async () => {
      // get the categories from the db
      s.categories = await Category.find();
      // get the products from the db
      s.products = await Product.find();
      // initilize the shopping cart
      // (this provides local storage of cartContents)
      init(s, 'cartContents');
    })();
  }, []);

  return s.products.length ? <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/product-list2" element={<ProductList2 />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/product-detail2/:id" element={<ProductDetail2 />} />
      <Route path="/product-edit/:id" element={<ProductEdit />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path='/backoffice' element={<Backoffice />} />
      <Route path='/backoffice-camera' element={<BackofficeCamera />} />
    </Routes>
  </Router> : null;
}