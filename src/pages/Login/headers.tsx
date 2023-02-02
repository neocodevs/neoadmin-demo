import React from "react";
import { pages } from "@neoco/neoco-backoffice";
// import { loginRequest } from "utils/requests";

const { Login } = pages;

const loginRequest = () => {
  console.log("loginRequest");
};

const headers = {
  type: "Page",
  options: {
    name: "Login",
    route: {
      path: "/",
      unAuth: true,
      exact: true,
      component: (props) => <Login {...props} onSubmit={loginRequest} />,
    },
  },
};

export default headers;
