import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./Global.scss";
import Tasks from "./views/Tasks/Tasks";


const router = createBrowserRouter([
   {
    path: "/",
    element: <Tasks/>,
  },

  // {
  //   path: "/Organization",
  //   element: <Organization/>
  // },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
