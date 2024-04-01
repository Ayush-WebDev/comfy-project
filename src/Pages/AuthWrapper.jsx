import React from "react";
import { useGlobalContext } from "../Context";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "../Components";
//// Purpose of authwrapper is to check for user as there is delay in fetching the user if we locally store user so we wrap
//// entire app in the authwrapper to provide enough time to check to check the user

const AuthWrapper = ({ children }) => {
  const { error, isLoading } = useAuth0();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return (
      <>
        <div>Oops...{error.message}</div>
      </>
    );
  }
  return <>{children}</>;
};

export default AuthWrapper;
