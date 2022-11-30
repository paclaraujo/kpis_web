import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "user/:userId/dashboard",
    element: <Dashboard />,
  },
]);
