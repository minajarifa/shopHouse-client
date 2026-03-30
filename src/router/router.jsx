import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "Register",
    Component: Register,
  },
  {
    path: "Login",
    Component: Login,
  },
]);
