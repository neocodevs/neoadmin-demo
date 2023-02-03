import React from "react";
import { pages } from "@neoco/neoco-backoffice";

const { Login } = pages;

const loginRequest = () => {
  return Promise.resolve({
    user: {
      name: "test",
      email: "test@mail.com",
    },
    token: "test",
  });
};

const headers = {
  type: "Page",
  options: {
    name: "Login",
    route: {
      path: "/",
      unAuth: true,
      exact: true,
      component: (props: any) => <Login {...props} onSubmit={loginRequest} />,
    },
  },
};

export default headers;
