import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          {/* Adding switch will no longer need exact keyword */}
          <Switch>
            <Route path={"/products/:id"} component={ProductDetails} />
            <Route
              path={"/products"}
              //adding props in routing need render method
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Route path={"/posts/:year/:month"} component={Posts} />
            <Route path={"/not-found"} component={NotFound} />
            <Route path={"/admin"} component={Dashboard} />
            <Route path={"/"} exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
