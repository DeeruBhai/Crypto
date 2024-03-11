import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./sections/ErrorPage.jsx";
import Exchanges from "./sections/Exchanges.jsx";
import CoinDetail from "./sections/CoinDetail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/home", element: <App />, errorElement: <ErrorPage /> },
  { path: "/home/:id", element: <CoinDetail />, errorElement: <ErrorPage /> },
  { path: "/exchanges", element: <Exchanges />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
