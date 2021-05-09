import React from "react";
import { Route, Redirect } from "react-router-dom";

// ...rest = berisikan path / exact
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = localStorage.getItem; // Kalau sudah sign in tidak bisa masuk ke halaman ini
  return (
    <Route
      {...rest} // path = "...." exact
      render={(props) =>
        // <Component {...porps} /> = <BasicHome {...props} />
        isAuthenticated && restricted ? (
          <Redirect to="/learning/basic-home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
