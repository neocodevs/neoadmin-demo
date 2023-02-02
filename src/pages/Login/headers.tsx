import React from "react";
import { pages } from "@neoco/neoco-backoffice";

const { Login } = pages;

const loginRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: {
          name: "test",
          email: "test@mail.com",
        },
        token: "test",
      });
      reject("error");
    }, 1000);
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
