import { createBrowserRouter } from "react-router-dom";
import { loader as homeLoader } from "./Pages/Landing";
import {
  Landing,
  Products,
  About,
  Orders,
  Layout,
  SingleProduct,
  Signup,
  Cart,
  Error,
  Login,
  Checkout,
  PrivateRoute,
} from "./Pages";

import { ErrorElement } from "./Components";
import { loadedElement } from "./Pages/SingleProduct";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: loadedElement,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
