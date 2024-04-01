import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import AuthWrapper from "./Pages/AuthWrapper";
const App = () => {
  return (
    <>
      <AuthWrapper>
        <RouterProvider router={router} />
      </AuthWrapper>
    </>
  );
};

export default App;
