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


const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/courses" component={Products} />
        <Route exact path="/courses/:courseId" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
