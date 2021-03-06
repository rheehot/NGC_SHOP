import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import SignUpTwo from "./Pages/SignUpTwo";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Product from "./Pages/ProductDetail";
import AddressSearch from "./Pages/AddressSearch";
import Search from "./Pages/Search";
const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signup2" component={SignUpTwo} />
        <Route path="/addresssearch" component={AddressSearch} />
        <Route path="/cart" component={Cart} />
        <Route path="/shop/:kind1/:kind2" component={Shop} />
        <Route path="/shop/:kind1/" component={Shop} />
        <Route path="/product/:name" component={Product} />
        <Route path="/search/etc/kind1/:kind1/kind2/:kind2/saleMore/:saleMore/saleLess/:saleLess" component={Search} />
        <Route path="/search/word/:word" component={Search} />
        
        
      </Switch>
    </Router>
  );
};

export default Routes;
