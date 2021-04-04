import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {

  let isAuthenticated: boolean = useSelector((state: any) => state.auth.isAuthenticated)
  let isLoading: boolean = useSelector((state: any) => state.auth.isLoading)
  if(isLoading)
    return (
      <div>Loading......</div>
    )

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...rest} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;