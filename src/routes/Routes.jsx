import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Basic from "../layouts/Basic";
import Home from "../pages/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Basic />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
