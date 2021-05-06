import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import BasicReact from "./pages/learning/BasicReact/BasicReact";
import HomePage from "./pages/Home/homePage";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import OrderPage from "./pages/OrderPage/OrderPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import AdminPage from "./pages/AdminPage/adminPage";
import LogIn from "./pages/login/Login";
import signup from "./pages/signup/signup";
import "bootstrap/dist/css/bootstrap.min.css";
// import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/pages/MovieDetails/:id"
            exact
            component={MovieDetails}
          />
          <Route path="/pages/OrderPage/:id" exact component={OrderPage} />
          <Route path="/pages/PaymentPage" exact component={PaymentPage} />
          <Route path="/pages/AdminPage" exact component={AdminPage} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={signup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
