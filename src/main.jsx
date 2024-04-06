import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppProvider from "./Context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import FilterProvider from "./FilterContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN_ID}
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <FilterProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </FilterProvider>
    </Auth0Provider>
  </React.StrictMode>
);

/// To run the netlify functions with vite and react, in script add "dev":"netlify dev", remove preview:"vite" and build : npm run build

//"dev":"vite" "preview": "vite preview",
