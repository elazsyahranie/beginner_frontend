import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import BasicReact from "./pages/learning/BasicReact/BasicReact";
import HomePage from "./pages/Home/homePage";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import OrderPage from "./pages/OrderPage/OrderPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import "bootstrap/dist/css/bootstrap.min.css";
// import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/pages/Home" exact component={HomePage} />
          <Route path="/pages/MovieDetails" exact component={MovieDetails} />
          <Route path="/pages/OrderPage" exact component={OrderPage} />
          <Route path="/pages/PaymentPage" exact component={PaymentPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
