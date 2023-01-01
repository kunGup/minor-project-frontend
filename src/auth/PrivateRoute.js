import React, { Component } from "react";
import { isAuthenticated } from "./index";
import { Navigate, Outlet, Route } from "react-router-dom";

function PrivateRoute() {
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ alert: "First signin is required" }} />
  );
}

export default PrivateRoute;
