import React from "react";
import { Route, Redirect } from "react-router-dom";

// ...rest = berisikan path / exact
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem; // Kalau sudah sign in tidak bisa masuk ke halaman ini
  return (
    <Route
      {...rest} // path = "...." exact
      render={(props) =>
        // <Component {...porps} /> = <BasicHome />
        // isAuthenticated = jika user sudah login
        // restricted = jika user sudah login maka tidak masuk ke halaman tersebut
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
