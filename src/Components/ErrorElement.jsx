import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  if (error) {
    console.log(error);
  }
  return null;
};

export default ErrorElement;
