import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import BasicReact from "./pages/learning/BasicReact/BasicReact";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";
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
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute path="/" exact component={HomePage} />
            <PrivateRoute
              path="/MovieDetails/:id"
              exact
              component={MovieDetails}
            />
            <PrivateRoute path="/OrderPage/:id" exact component={OrderPage} />
            <PrivateRoute path="/PaymentPage" exact component={PaymentPage} />
            <PrivateRoute path="/AdminPage" exact component={AdminPage} />
            <PublicRoute path="/login" exact component={LogIn} />
            <PublicRoute path="/signup" exact component={signup} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
