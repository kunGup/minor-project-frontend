import React, { Component } from "react";
import { isAuthenticated } from "./index";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>{
        if(!isAuthenticated()){
          return <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        }
        return children
      }}
    />
  );
}

export default PrivateRoute;
