import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './1/src/components/header/Header';
import Footer from './1/src/components/footer/Footer';
import Home from "./1/src/containers/home/Home";
import About from "./1/src/containers/about/About";
import Login from "./1/src/containers/login/Login";
import Products from './3/src/views/Products/Products';
import ProductDetails from './3/src/views/Products/ProductDetails';
import Cart from './3/src/views/Cart/Cart';
import Forum from './2/src/pages/Forum';
import Blog from './2/src/pages/Blog';

const homeUrl = process.env.NODE_ENV !== 'development' ? process.env.PUBLIC_URL : '';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={`${homeUrl}/`} component={Home} />
        <Route exact path={`${homeUrl}/about`} component={About} />
        <Route exact path={`${homeUrl}/login`} component={Login} />
        <Route exact path={`${homeUrl}/courses`} component={Products} />
        <Route exact path={`${homeUrl}/courses/:courseId`} component={ProductDetails} />
        <Route exact path={`${homeUrl}/cart`} component={Cart} />
        <Route exact path={`${homeUrl}/forum`} component={Forum} />
        <Route exact path={`${homeUrl}/blog`} component={Blog} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
